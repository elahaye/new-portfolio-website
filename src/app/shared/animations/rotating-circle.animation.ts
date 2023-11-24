import { animate, state, style, transition, trigger } from "@angular/animations";

function createRotatingAnimation(name: string, startDeg: number, endDeg: number, translateX: string) {
  return trigger(name, [
    state('in', style({
      transform: `rotate(${startDeg}deg) translateX(${translateX})`,
    })),
    state('out', style({
      transform: `rotate(${endDeg}deg) translateX(${translateX})`,
    })),
    transition('in => out', animate('8s linear'))
  ]);
}

export const rotatingCircle1Animation = createRotatingAnimation('rotatingCircle1Animation', 0, 360, '-165px');
export const rotatingCircle2Animation = createRotatingAnimation('rotatingCircle2Animation', 360, 0, '165px');
export const rotatingCircle1SmallAnimation = createRotatingAnimation('rotatingCircle1SmallAnimation', 0, 360, '-115px');
export const rotatingCircle2SmallAnimation = createRotatingAnimation('rotatingCircle2SmallAnimation', 360, 0, '115px');
