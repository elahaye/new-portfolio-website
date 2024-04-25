import { ChangeDetectorRef, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { rotatingCircle1Animation, rotatingCircle1SmallAnimation, rotatingCircle2Animation, rotatingCircle2SmallAnimation } from 'src/app/shared/animations/rotating-circle.animation';
import { AnimationEvent } from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  animations: [
    rotatingCircle1Animation,
    rotatingCircle2Animation,
    rotatingCircle1SmallAnimation,
    rotatingCircle2SmallAnimation
  ],
  providers: [
    provideAnimations(),
  ],
  styleUrls: ['./contact.component.scss'],
  template: `
    <h1 class="grey">Contact me</h1>

    <div id="structure">
      <section class="flex flex-col place-items-center relative min-h-[40vh]">
        <div class="main">
          <ng-container *ngIf="!isViewSizeTablet; else smallAnimation">
            <div class="circle1" [@rotatingCircle1Animation]="rotatingState" (@rotatingCircle1Animation.done)="onEnd($event)"></div>
            <div class="circle2" [@rotatingCircle2Animation]="rotatingState" (@rotatingCircle2Animation.done)="onEnd($event)"></div>
          </ng-container>

          <ng-template #smallAnimation>
            <div class="circle1" [@rotatingCircle1SmallAnimation]="rotatingState" (@rotatingCircle1SmallAnimation.done)="onEnd($event)"></div>
            <div class="circle2" [@rotatingCircle2SmallAnimation]="rotatingState" (@rotatingCircle2SmallAnimation.done)="onEnd($event)"></div>
          </ng-template>

          <h2 class="green">Stay in touch</h2>
        </div>
      </section>

      <section class="flex flex-col place-items-center mt-20 min-h-[30vh]">
        <p class="grey">
          <i class="far fa-envelope"></i>
          e.lahaye49&#64;gmail.com
        </p>

        <button>
          <a class="link" target="_blank" href="https://www.linkedin.com/in/elise-lahaye/">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </button>

        <button>
          <a class="link" target="_blank" href="https://github.com/elahaye">
            <i class="fab fa-github"></i>
            <span>Github</span>
          </a>
        </button>

        <button id="resume">
          <a href="assets/resume_lahaye_elise_canada.pdf" download>
            <i class="fas fa-file-download"></i>
            Download my resume
          </a>
        </button>

        <button>
          <a class="link" href="assets/CV_lahaye_elise_canada.pdf" download>
            <span>en Français</span>
          </a>
        </button>
      </section>
    </div>
  `,
})
export class ContactComponent implements OnInit {
  rotatingState: string = 'in'; // Initial state
  isViewSizeTablet = false;

  private cdRef = inject(ChangeDetectorRef);

  @HostListener('window:resize')
  getScreenSize() {
    this.isViewSizeTablet = window.innerWidth < 768;
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.rotatingState = 'out';
    this.getScreenSize();
  }

  onEnd(event: AnimationEvent) {
    this.rotatingState = event?.toState === 'in' ? 'out' : 'in';
  }
}
