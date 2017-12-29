import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { heroList } from './hero-list';

@Injectable()
export class HeroManagerService {

  constructor() { }

  selectedHero: Hero;
  opponentHero: Hero;

  createHeroes = (): Hero[] => heroList;

  setSelectedHero = (hero: Hero): Hero => this.selectedHero = hero;

  setOpponentHero = (): Hero => this.opponentHero = heroList.filter(hero =>
    hero.id !== this.selectedHero.id)[Math.floor(Math.random() * (heroList.length - 1))];

  fetchOpponentHero = (): Hero => this.opponentHero;

  onAttack = (): void => {
    if (Math.random() * 100 < this.selectedHero.strength) {
      this.opponentHero.health -= this.selectedHero.attack
    }
    else {
      this.opponentHero.health += 10;
    }
  };

  onDefense = (): void => {
    if (Math.random() * 100 < this.selectedHero.concentration) {
      this.opponentHero.attack -= 2
    }
    else {
      this.opponentHero.attack += 1
    }
  }

  onRegenerate = (): void => {
    if (Math.random() * 100 < this.selectedHero.wisdom) {
      this.selectedHero.health += 5
    }
  }
}
