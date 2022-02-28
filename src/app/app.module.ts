import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstImpressionComponent } from './modules/introduction/first-impression/first-impression.component';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { NavbarComponent } from './modules/introduction/navbar/navbar.component';
import { JourneyComponent } from './modules/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavbarComponent,
    FirstImpressionComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
