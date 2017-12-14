import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

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
  ) { }

  heroes: Hero[];

  fetchHeroes(): void {
    this.heroes = this.heroManagerService.createHeroes();
  }

  ngOnInit(): void {
    this.fetchHeroes()
  };
}
