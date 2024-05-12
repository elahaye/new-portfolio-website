import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TimelineComponent} from './components/timeline/timeline.component';

@Component({
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  selector: 'app-skills',
  template: `
    <app-timeline />

    <section>
      <article>
        <h2 class="bg-green white">Language Skills</h2>

        <ul>
          <li>
            <span class="bold title-typo">French</span>
            - Mother tongue
          </li>

          <li>
            <span class="bold title-typo">English</span>
            - Advanced
          </li>

          <li>
            <span class="bold title-typo">Japanese</span>
            - Intermediate
          </li>

          <li>
            <span class="bold title-typo">Spanish</span>
            - Beginner
          </li>
        </ul>
      </article>

      <article>
        <h2 class="bg-green white">Social Skills</h2>

        <div>
          <p>
            <i class="fas fa-bolt"></i>
            Energetic
          </p>

          <p>
            <i class="fas fa-smile"></i>
            Joyful
          </p>

          <p>
            <i class="fas fa-fist-raised"></i>
            Gonna do it
          </p>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
