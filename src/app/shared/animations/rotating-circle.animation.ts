import {animate, state, style, transition, trigger} from '@angular/animations';

function rotatingAnimation(name: string, startDeg: number, endDeg: number, translateX: string) {
  return trigger(name, [
    state(
      'in',
      style({
        transform: `rotate(${startDeg}deg) translateX(${translateX})`,
      }),
    ),
    state(
      'out',
      style({
        transform: `rotate(${endDeg}deg) translateX(${translateX})`,
      }),
    ),
    transition('in => out', animate('8s linear')),
  ]);
}

export const rotatingCircle1Animation = rotatingAnimation(
  'rotatingCircle1Animation',
  0,
  360,
  '-165px',
);
export const rotatingCircle2Animation = rotatingAnimation(
  'rotatingCircle2Animation',
  360,
  0,
  '165px',
);
export const rotatingCircle1SmallAnimation = rotatingAnimation(
  'rotatingCircle1SmallAnimation',
  0,
  360,
  '-115px',
);
export const rotatingCircle2SmallAnimation = rotatingAnimation(
  'rotatingCircle2SmallAnimation',
  360,
  0,
  '115px',
);
