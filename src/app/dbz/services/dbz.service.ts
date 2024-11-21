import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public krillin: Character= {
    id: uuid(),
    name: 'Krillin',
    power: 5000
};
  public goku: Character={
    id: uuid(),
    name  : 'Goku',
    power : 10000
}

  public characters: Character[]= [this.krillin, this.goku];

  public addCharacterToList( character: Character):void{
    console.log('en el service');
    character.id =  uuid();
    console.table(character);

    this.characters.push(character);
    //character.name = '';
    //character.power = 0;
  }
  public deleteCharacter(uuid: string): void{
    console.log('en el serivce ' +uuid);
    for (let i = this.characters.length - 1; i >= 0; i--) {
      if (this.characters[i].id === uuid) {
            this.characters.splice(i, 1);
      }
    }
  }
  constructor() { }
}
