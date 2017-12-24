import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { HeroPresentationComponent } from './hero/hero-presentation';

import { HeroManagerService } from './hero/hero-manager';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroPresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HeroManagerService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
