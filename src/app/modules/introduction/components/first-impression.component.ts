import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {blinkCaretAnimation, typingAnimation} from 'src/app/shared/animations/typing.animation';

@Component({
  standalone: true,
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  providers: [provideAnimations()],
  animations: [typingAnimation, blinkCaretAnimation],
  selector: 'app-first-impression',
  template: `
    <section
      class="flex flex-col tablet:flex-row justify-center items-center h-[calc(100vh_-_60px)] mt-[60px]"
    >
      <article
        class="flex justify-center items-center w-full tablet:w-[40%] h-[60%] tablet:h-full mx-auto mt-0 mb-8 tablet:m-0"
      >
        <div
          class="featured-img relative w-[59%] tablet:w-[65%] max-w-[230px] tablet:max-w-[320px] m-auto
                  before:bg-light-green before:animate-rotate-square-1 before:bottom-8 before:right-8 hover:before:bottom-12 hover:before:right-12
                  after:bg-yellow after:animate-rotate-square-2 after:top-8 after:left-8 hover:after:top-12 hover:after:left-12"
        >
          <img
            src="../assets/images/photo.jpg"
            alt="Photo Elise"
            class="h-auto block rounded-full w-full"
          />
        </div>
      </article>
      <h1
        class="text-grey text-center phone:w-[230px] tablet:ml-[15%] desktop:w-[290px] big-desktop:w-[335px] big-desktop:text-5xl"
      >
        Elise Lahaye
        <span
          class="text-left block whitespace-nowrap overflow-hidden pr-0.5 border-r-4 border-r-solid border-r-yellow"
          [@typingAnimation]="stateTyping"
          (@typingAnimation.done)="
            $event && (stateTyping = $event.toState === 'typingIn' ? 'typingOut' : 'typingIn')
          "
          [@blinkCaretAnimation]="stateBliking"
          (@blinkCaretAnimation.done)="
            $event && (stateBliking = $event.toState === 'blinkIn' ? 'blinkOut' : 'blinkIn')
          "
        >
          Web Developer
        </span>
      </h1>
    </section>
  `,
  styles: [
    `
      .featured-img {
        &:before,
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          border-radius: 20px;
          transition: 0.8s ease;
        }
      }
    `,
  ],
})
export class FirstImpressionComponent implements OnInit {
  stateTyping: string = 'typingIn';
  stateBliking: string = 'blinkIn';

  ngOnInit(): void {
    this.stateTyping = 'typingOut';
    this.stateBliking = 'blinkOut';
  }
}
