import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SonhoService {

  constructor() { 
  }
  
  public numeroDeDeus = 0;
  public nome = ''
  public image = ''
  
  public setAbilities(abilities: number) {
    this.numeroDeDeus = abilities;
  }

  public getDEUS(){
    return this.numeroDeDeus;
  }
  
}
