import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroManagerService } from './hero-manager';

import { Hero } from './hero';

@Component({
  selector: 'hero-presentation',
  templateUrl: './hero-presentation.html',
  styleUrls: ['./hero-presentation.scss']
})
export class HeroPresentationComponent implements OnInit {
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
  };

  confirmSelection = (): void => {
    console.log('You have selected', this.selectedHero.name);
    this.router.navigate(['/battle']);
  }
}
