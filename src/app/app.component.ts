import {Component, OnInit, inject} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-loading-ripple *ngIf="!startView" />

    <section [ngClass]="{'opacity': !startView}">
      <app-navbar />
      <app-introduction />
      <app-journey id="journey" />
      <app-skills id="skills" />
      <app-projects id="projects" />
      <app-contact id="contact" />
    </section>
  `,
  styles: [
    `
      .opacity {
        opacity: 0;
        pointer-events: none;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  startView = false;

  #router = inject(Router);

  constructor() {
    this.#router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.#scrollToElement(event.url.replace('/', ''));
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => (this.startView = true), 3000);
  }

  #scrollToElement(value: string): void {
    const element = document.getElementById(value);
    if (element) element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
