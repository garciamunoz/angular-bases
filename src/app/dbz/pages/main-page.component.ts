import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html'
})

export class MainPageComponent  {


  constructor(private dbzService: DbzService) { }

  get characters(): Character[]{
    return this.dbzService.characters;
  }

  public onDeleteIndex(id: string): void{
      this.dbzService.deleteCharacter(id);
  }

  public onNewCharacter(character: Character):void{
      this.dbzService.addCharacterToList(character);
  }


}
