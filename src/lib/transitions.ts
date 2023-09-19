import { bounceOut, quadInOut, quintOut } from "svelte/easing";

interface transitionProps {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  easing?: (t: number) => number;
}

export const BASE_DELAY = 200;
export const BASE_DURATION = 2400;
export const BASE_Y = 250;
export const BASE_X = 150;
