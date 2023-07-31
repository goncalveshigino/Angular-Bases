import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-personagem',
  templateUrl: './list-personagem.component.html',
  styleUrls: ['./list-personagem.component.css']
})
export class ListPersonagemComponent {

  @Input()
  public characterList: Character[] = []

}

