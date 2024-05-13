import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {WorkInProgressComponent} from './components/work-in-progress.component';

@Component({
  standalone: true,
  imports: [CommonModule, WorkInProgressComponent],
  selector: 'app-projects',
  template: `
    <section class="min-h-screen mt-[60px] pb-[60px] bg-light-green px-2.5 py-8">
      <h1 class="text-grey text-center mt-[20px]">My Projects</h1>

      <div class="flex flex-col justify-center items-center">
        <app-work-in-progress />

        <p class="text-grey title-typo text-xl text-center max-w-[500px]">
          This part is still on work.
          <br />
          Please be patient it's coming soon...
        </p>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}
