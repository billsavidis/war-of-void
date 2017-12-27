import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroManagerService } from '../hero/hero-manager';

import { Hero } from '../hero/hero';

@Component({
  selector: 'hero-choice',
  templateUrl: './hero-choice.html',
  styleUrls: ['./hero-choice.scss']
})
export class HeroChoiceComponent implements OnInit {
  constructor(
    private heroManagerService: HeroManagerService,
    private router: Router,
  ) { }

  selectHeroText = 'Select hero!';

  heroes: Hero[];
  selectedHero: Hero;

  fetchHeroes = (): void => {
    this.heroes = this.heroManagerService.createHeroes();
  }

  ngOnInit(): void {
    this.fetchHeroes();
  };

  selectHero = (hero: Hero): void => {
    this.selectedHero = hero;
    this.heroManagerService.setSelectedHero(hero);
  };

  confirmSelection = (): void => {
    this.router.navigate(['/battle']);
  }
}
