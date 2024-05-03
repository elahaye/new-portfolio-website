import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-journey',
  template: `
    <section class="flex flex-col items-center min-h-screen bg-light-green">
      <article class="relative my-10 min-h-[350px] w-full">
        <img class="one" src="../assets/images/tokyo.jpg" alt="Photo Japon" />
        <img class="two" src="../assets/images/london.jpg" alt="Photo Londres" />
        <img class="three" src="../assets/images/montreal.jpg" alt="Photo Montréal" />
        <img class="four" src="../assets/images/motivation.jpg" alt="Photo Motivation" />
      </article>

      <article
        class="flex flex-col justify-center items-center gap-10 text-justify mx-2.5 max-w-[500px] text-grey mb-12"
      >
        <h2>JS Developer looking for a job !</h2>
        <p>
          Having lived in Paris, London, Tokyo, and Montreal, I've decided to return to beloved
          France, set my suitcase down and enjoy time with friends and family. Transitioning to web
          development 4 years ago, I primarily worked with Angular 2+, but I'm open to all
          JavaScript-oriented roles. If you're seeking a motivated developer, please don't hesitate
          to reach out.
        </p>
      </article>
    </section>
  `,
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {}
