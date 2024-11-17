import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   public heroNames: string[] = ['Goku','Vegeta','Trunks','Piccolo'];
   public deletedHero: string | undefined = undefined;

   public deleteLastHero():void{
      this.deletedHero = this.heroNames.pop();
   }

}
