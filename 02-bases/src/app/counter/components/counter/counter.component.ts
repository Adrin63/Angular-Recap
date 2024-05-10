import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:`
    <h1>Counter: {{counter}}</h1>
    
    <Button (click)="increaseBy(counter)" >+1</Button>
    <button (click)="reset()">Reset</button>
    <Button (click)="decreaseBy(counter)">-1</Button>

`
})

export class CounterComponent {
    constructor() { }

    public counter:number = 10

    increaseBy(value:number):void {
        this.counter += 1;
      }
      decreaseBy(value:number):void {
        this.counter -= 1;
      }
    
      reset():void {
        this.counter = 10;
      }
}