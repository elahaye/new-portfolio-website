import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-loading-ripple',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="fixed h-screen w-screen m-0 p-0 flex justify-center items-center pointer-events-none bg-white overflow-hidden"
    >
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </section>
  `,
  styles: [
    `
      .lds-ripple {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
      }
      .lds-ripple div {
        position: absolute;
        border: 6px solid var(--green-color);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
      }
      @keyframes lds-ripple {
        0% {
          top: 100px;
          left: 100px;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: 0px;
          left: 0px;
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    `,
  ],
})
export class LoadingRippleComponent {}
