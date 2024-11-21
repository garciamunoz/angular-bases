import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter();
  public character: Character ={
    id:'',
    name  : '',
    power : 0

  }

  public addCharacter(): void{
    console.log('se dio click al form');
    this.onNewCharacterEmitter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;

  }

}
