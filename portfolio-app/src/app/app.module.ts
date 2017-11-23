import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApRoutingModule } from './/ap-routing.module';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ApRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
