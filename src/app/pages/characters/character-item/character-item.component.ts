import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../characters.model';

@Component({
  selector: 'character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {

  @Input() character: Character = { name: '', description: '', picture: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
