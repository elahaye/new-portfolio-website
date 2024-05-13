import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroductionComponent} from './modules/introduction/introduction.component';
import {NavbarComponent} from './core/navbar.component';
import {JourneyComponent} from './modules/journey/journey.component';
import {TimelineComponent} from './modules/skills/components/timeline/timeline.component';
import {ProjectsComponent} from './modules/projects/projects.component';
import {SkillsComponent} from './modules/skills/skills.component';
import {WorkInProgressComponent} from './modules/projects/components/work-in-progress.component';
import {ContactComponent} from './modules/contact/contact.component';
import {LoadingRippleComponent} from './shared/components/loading-ripple.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoadingRippleComponent,
    IntroductionComponent,
    NavbarComponent,
    JourneyComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    WorkInProgressComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
