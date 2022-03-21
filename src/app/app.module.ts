import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstImpressionComponent } from './modules/introduction/first-impression/first-impression.component';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { NavbarComponent } from './modules/introduction/navbar/navbar.component';
import { JourneyComponent } from './modules/journey/journey.component';
import { TimelineComponent } from './modules/skills/timeline/timeline.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WorkInProgressComponent } from './modules/projects/work-in-progress/work-in-progress.component';
import { ContactComponent } from './modules/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavbarComponent,
    FirstImpressionComponent,
    JourneyComponent,
    TimelineComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkInProgressComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
