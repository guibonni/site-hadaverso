import { Component, OnInit } from '@angular/core';
import { Character } from './characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public items: Character[] = [
    { 
      name: 'O Grande Hadarai', 
      description: 'Um bardo sedutor, um deus da morte, um rei consorte de uma súcubo. Esses títulos não contam nem uma parte da grandiosidade do primeiro Hadarai.', 
      picture: '../../../../assets/hadarai.png' 
    },
    { 
      name: 'Nathaniel Drake', 
      description: 'Outrora um mercenário, o irmão de criação de Hadarai Woodborn hoje é o maior empresário no ramo de charutos mágicos.', 
      picture: '../../../../assets/drake.png' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
