import {Component, OnInit} from '@angular/core';

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

  ngOnInit(): void {
    setTimeout(() => (this.startView = true), 3000);
  }
}
