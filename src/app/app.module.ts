import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    ContactComponent,
    StudiesComponent,
    HobbiesComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
