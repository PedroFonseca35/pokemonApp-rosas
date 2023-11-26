import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { SonhoService } from '../services/sonho.service';
import { PokedexService } from '../services/pokedex.service';

interface procurarPokemon {
  name: string;
  abilities: any[];
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  id: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any ={
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  acharPokemon: procurarPokemon = {
    name: '',
    abilities: [],
    sprites: {
      front_default: ''
    },
    height: 0,
    weight: 0,
    id: 0
  }

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    private SonhoService: SonhoService,
    private pokedexService: PokedexService
  ) {}
  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
      .subscribe((value: any) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
        this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
        this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
        this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
      });
      this.pokeAPIService.getPokeAPIService()
        .subscribe((value: any) => {
          this.acharPokemon.name = value.name;
          this.acharPokemon.sprites = value.sprites;
          this.acharPokemon.abilities = value.abilities.map((ability: any) => ability.ability.name)
          this.acharPokemon.height = value.height;
          this.SonhoService.setAbilities((this.acharPokemon.abilities).length)
          this.SonhoService.nome = this.acharPokemon.name;
          this.SonhoService.image = this.acharPokemon.sprites.front_default;
          this.acharPokemon.weight = value.weight;
          let pokemon = {name: this.acharPokemon.name, image: this.acharPokemon.sprites.front_default}
          //this.pokedexService.setPokemons(this.acharPokemon.name, this.acharPokemon.sprites.front_default)
        });
        
  } 
  
}