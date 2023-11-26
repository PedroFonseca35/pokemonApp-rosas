import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }
  public name_anterior = '';
  
  public listPokemons: any[] = [];
  
  public setPokemons(name: string, image: string, derrotas: number, vitorias: number, empates: number) {
    
    const index = this.listPokemons.findIndex(pokemon => pokemon.name === name && pokemon.image === image);

    if (index !== -1) {
      
      this.listPokemons[index].derrotas = derrotas;
      this.listPokemons[index].vitorias = vitorias;
      this.listPokemons[index].empates = empates;
    } else {
      
      if (this.listPokemons.length === 100) {
        this.listPokemons;
      }
      this.listPokemons.push({ name, image, derrotas, vitorias, empates });
    }
  }

  public getPokemons() {
    return this.listPokemons;
  }
}