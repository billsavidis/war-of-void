import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { HeroChoiceComponent } from './heroChoice/hero-choice';
import { BattleComponent } from './battle/battle';

import { HeroManagerService } from './hero/hero-manager';
import { Hero } from './hero/hero';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroChoiceComponent,
    BattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HeroManagerService,
    Hero,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
