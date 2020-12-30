import { Equation } from "../Day13.types";

export const getEquation = ({
  currentInterval,
  nextInterval,
  difference,
}: {
  currentInterval: number;
  nextInterval: number;
  difference: number;
}): Equation => {
  let found = false;
  let nextMultiplier = 1;

  while (!found) {
    nextMultiplier++;
    found =
      (nextMultiplier * nextInterval - difference) % currentInterval === 0;
  }

  return {
    current: {
      prime: currentInterval,
      multiplier:
        (nextMultiplier * nextInterval - difference) / currentInterval,
    },
    next: {
      prime: nextInterval,
      multiplier: nextMultiplier,
    },
    difference,
  };
};
