import {animate, keyframes, style, transition, trigger} from '@angular/animations';

function createTypingAnimation() {
  return trigger('typingAnimation', [
    transition('typingIn => typingOut', [
      animate(
        '7s',
        keyframes([
          style({width: '0%', offset: 0}),
          style({width: '50%', offset: 0.2}),
          style({width: '100%', offset: 0.4}),
          style({width: '100%', offset: 0.5}),
          style({width: '100%', offset: 0.6}),
          style({width: '50%', offset: 0.8}),
          style({width: '0%', offset: 0.95}),
          style({width: '0%', offset: 1}),
        ]),
      ),
    ]),
  ]);
}

function createBlinkCaretAnimation() {
  return trigger('blinkCaretAnimation', [
    transition('blinkIn => blinkOut', [
      animate(
        '0.8s',
        keyframes([
          style({borderColor: 'transparent', offset: 0}),
          style({borderColor: 'var(--yellow-color)', offset: 0.5}),
          style({borderColor: 'transparent', offset: 1}),
        ]),
      ),
    ]),
  ]);
}

export const typingAnimation = createTypingAnimation();
export const blinkCaretAnimation = createBlinkCaretAnimation();
