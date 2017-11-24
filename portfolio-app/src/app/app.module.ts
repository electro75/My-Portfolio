import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApRoutingModule } from './/ap-routing.module';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    ApRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
