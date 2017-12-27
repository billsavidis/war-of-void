import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroManagerService } from '../hero/hero-manager';

@Component({
  selector: 'battle',
  templateUrl: './battle.html',
  styleUrls: ['./battle.scss']
})
export class BattleComponent implements OnInit {
  constructor(
    private heroManagerService: HeroManagerService,
  ) { }

  selectedHero: Hero;

  ngOnInit(): void {
    this.selectedHero = this.heroManagerService.selectedHero;
  };
}
