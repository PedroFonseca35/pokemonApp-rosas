import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor() { }

  public dados: any[] = [];

  public name = "";
  public vitorias = 0;
  public derrotas = 0;
  public empates = 0;



}