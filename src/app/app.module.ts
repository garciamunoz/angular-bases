import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';
import { CommonModule } from '@angular/common';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
    CommonModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
