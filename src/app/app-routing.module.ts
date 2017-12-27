import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroChoiceComponent } from './heroChoice/hero-choice';
import { BattleComponent } from './battle/battle';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/herochoice',
    pathMatch: 'full',
  },
  {
    path: 'herochoice',
    component: HeroChoiceComponent,
    pathMatch: 'full',
  },
  {
    path: 'battle',
    pathMatch: 'full',
    component: BattleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {}
