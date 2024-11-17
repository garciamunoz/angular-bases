import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'Hola Mundo';
  public counter: number = 100;

  public reserve: number = this.counter;
  public increaseBy(increasing : number): void {
    this.counter += increasing;
  }

  public decreaseBy(decreasing : number): void {
    this.counter -= decreasing;
  }
  public reset():void{
    this.counter = this.reserve;

  }




}
