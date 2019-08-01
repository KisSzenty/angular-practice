import { Component } from '@angular/core';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

@Component({ //metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = `angular-practice-001`;
  getName(): string {
    return `Bond, James Bond`;

  }
  names: string[] = [
    'Pisti',
    'Sanyi',
    'Laci',
    'Vali'
  ];
  name: string;
  disabled: boolean = false;

  constructor() {
    this.name = this.names[0];
    setInterval(() => {
      let index: number = Math.floor(Math.random() * this.names.length)
    }, 2000);
  }
  setName(name): void {
    this.name = name;
  }
}

