import { Component, Input } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootsrap-init';
  heroes: Hero[] = [
    { name: "Plutónium sárkány", adress: "New York", superPower: "Can explode" },
    { name: "Béla az állat", adress: "street", superPower: "Drink more and Teleport" },
    { name: "Hol a fa Főnök?", adress: "Budapest", superPower: "Can save the Earth" }
  ];
  selectedHero: Hero = this.heroes[0];
  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroChanged(hero: Hero): void {
    console.log('Changed Hero: ', hero);
  }
  /*myHero: Hero = {
    name: "Béla",
    adress: 'street',
    superPower: 'drinkMoreAndTeleport',
  }*/
}