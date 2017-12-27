import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { heroList } from './hero-list';

@Injectable()
export class HeroManagerService {

  constructor() { }

  selectedHero: Hero;

  createHeroes = (): Hero[] => heroList;

  setSelectedHero = (hero: Hero): Hero => this.selectedHero = hero;
}
