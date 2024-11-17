import { Component } from "@angular/core";

@Component({
  template: `
  <p>
    El contador es {{counter}}
  </p>
  <button (click)="increaseBy(4)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy(5)">-1</button>
  <hr>

  `,
  selector:'app-counter'
})
export class CounterComponent{
  public counter: number = 100;
  public valueReset : number = this.counter;
  public increaseBy(value: number):void{
    this.counter+= value;
  }

  public decreaseBy(value: number):void{
    this.counter-= value;
  }

  public reset(): void{
    this.counter = this.valueReset;

  }
}
