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
  opponentHero: Hero;

  ngOnInit(): void {
    this.heroManagerService.setOpponentHero();
    this.selectedHero = this.heroManagerService.selectedHero;
    this.opponentHero = this.heroManagerService.fetchOpponentHero();
  };

  onAttack(): void {
    this.heroManagerService.onAttack();
    console.log('Attacked');
  }

  onDefend(): void {
    this.heroManagerService.onDefense();
    console.log('Defended');
  }

  onRegenerate(): void {
    this.heroManagerService.onRegenerate();
    console.log('Regenerated');
  }
}
