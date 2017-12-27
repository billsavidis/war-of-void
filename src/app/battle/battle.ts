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

  attack = 'Attaaaaaack!';
  defend = 'Defend...';
  regenerate = 'I need some rest...';
  selectedHero: Hero;

  ngOnInit(): void {
    this.selectedHero = this.heroManagerService.selectedHero;
  };

  onAttack(): void {
    console.log('Attacked');
  }

  onDefend(): void {
    console.log('Defended');
  }

  onRegenerate(): void {
    console.log('Regenerated');
  }
}
