import { Equation } from "../Day13.types";

export const getEarliestBusWithSubsequentDepartures = (
  equations: Equation[]
) => {
  let round = 0;
  let isAlign = false;

  while (!isAlign) {
    const firstBusTimestamp =
      (equations[0].current.multiplier + equations[0].next.prime * round) *
      equations[0].current.prime;

    let remainder = 0;
    let accumulatedDifference = 0;
    for (let i = 0; i < equations.length && remainder === 0; i++) {
      const equation = equations[i];
      accumulatedDifference += equation.difference;

      const nextBusTimestamp = firstBusTimestamp + accumulatedDifference;

      const {
        next: { prime: nextPrime, multiplier: nextMultiplier },
        current,
      } = equation;
      remainder =
        (nextBusTimestamp / nextPrime - nextMultiplier) % current.prime;
    }

    if (remainder === 0) {
      isAlign = true;
      console.log("found at round", round);
    }

    round++;
  }
};
