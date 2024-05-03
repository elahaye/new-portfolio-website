import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar.component';
import {FirstImpressionComponent} from './components/first-impression.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, FirstImpressionComponent],
  selector: 'app-introduction',
  template: `
    <div class="flex flex-col">
      <app-navbar />
      <app-first-impression />
    </div>
  `,
})
export class IntroductionComponent {}
