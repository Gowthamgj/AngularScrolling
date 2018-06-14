import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
