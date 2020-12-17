import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { ExperienceComponent } from './components/layout/experience/experience.component';
import { StudiesComponent } from './components/layout/studies/studies.component';
import { SkillsComponent } from './components/layout/skills/skills.component';
import { HobbiesComponent } from './components/layout/hobbies/hobbies.component';
import { FooterComponent } from './components/layout/footer/footer.component';


const appRoutes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'footer', component: FooterComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
