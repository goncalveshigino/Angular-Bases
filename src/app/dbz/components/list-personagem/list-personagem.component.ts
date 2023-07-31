import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'list-personagem',
  templateUrl: './list-personagem.component.html',
  styleUrls: ['./list-personagem.component.css']
})
export class ListPersonagemComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharater(id?: string):void {
    if ( !id ) return;
    this.onDelete.emit( id );
  }
  

}

