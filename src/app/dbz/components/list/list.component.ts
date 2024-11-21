import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[]

  @Output()
  public onDeleteIndexEmitter : EventEmitter<string> = new EventEmitter();


  public onDeleteCharacter(uuid: string): void{

      this.onDeleteIndexEmitter.emit(uuid);

  }
}
