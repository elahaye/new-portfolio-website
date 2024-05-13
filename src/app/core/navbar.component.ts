import {CommonModule} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {TABLET} from 'src/app/shared/enums/screen-size.enum';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navbar',
  template: `
    <div class="relative bg-white w-screen">
      <nav
        class="w-full bg-white z-50 flex items-center justify-between"
        [ngClass]="{
          'shadow-navbar transition-all duration-700 pb-1.5': !openMenu || innerWidth >= TABLET
        }"
      >
        <img
          src="assets/images/lotus.png"
          alt="Image d'un lotus"
          class="w-[50px] transition ease-in-out duration-1000 hover:[transform:rotateY(180deg)]"
        />

        <section class="hidden z-50 desktop:flex desktop:justify-end desktop:z-40">
          <ng-container *ngTemplateOutlet="links" />
        </section>

        <i
          class="fas fa-bars text-grey text-[32px] desktop:hidden"
          role="button"
          aria-disabled="true"
          (click)="openMenu = !openMenu"
          (keyup)="openMenu = !openMenu"
        ></i>
      </nav>

      <section
        class="absolute w-full bg-white flex flex-col desktop:hidden top-[-225px] z-40"
        [ngClass]="{'shadow-navbar transition-all duration-700 top-[45px]': openMenu}"
      >
        <ng-container *ngTemplateOutlet="links" />
      </section>

      <ng-template #links>
        <a routerLink="/journey" alt="My journey" (click)="onCloseMenu()"> My journey </a>
        <a routerLink="/skills" alt="My skills" (click)="onCloseMenu()"> My skills </a>
        <a routerLink="/projects" alt="My projects" (click)="onCloseMenu()"> My projects </a>
        <a routerLink="/contact" alt="Contact me" (click)="onCloseMenu()"> Contact me </a>
      </ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        z-index: 1000;
      }

      section {
        &.absolute {
          a:not(:last-of-type) {
            border-bottom: 1px solid var(--light-grey-color);
          }
        }
        a {
          margin: 0 20px;
          padding: 10px 0;

          position: relative;
          z-index: 0;
          font-size: 20px;

          &:before {
            position: absolute;
            color: var(--yellow-color);
            overflow: hidden;
            content: attr(alt);
            transition: all 0.4s;
            transform: scale(1.3);
            opacity: 0;
          }

          &:hover:before {
            transform: scale(1);
            opacity: 1;
            text-decoration: underline;
          }

          &:hover {
            color: var(--white-color);
            transition: all 0.3s;
          }
        }
      }

      img,
      .fas {
        margin: 5px 10px;
      }
    `,
  ],
})
export class NavbarComponent {
  openMenu = false;
  innerWidth = window.innerWidth;

  TABLET = TABLET;

  onCloseMenu(): void {
    setTimeout(() => {
      this.openMenu = false;
    }, 500);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= TABLET) this.openMenu = false;
  }
}
