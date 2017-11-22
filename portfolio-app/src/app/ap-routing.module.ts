import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path: 'about', component: AboutComponent },
{ path: 'skill', component: SkillComponent }
];

@NgModule({

	imports: [ RouterModule.forRoot(routes) ];
	exports: [RouterModule]
})



export class ApRoutingModule { }
