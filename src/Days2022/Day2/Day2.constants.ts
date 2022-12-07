import { YourAction, YourOutcome } from "./Day2.types";

export const ShapeScores: Record<YourAction, number> = {
  [YourAction.Rock]: 1,
  [YourAction.Paper]: 2,
  [YourAction.Scissors]: 3,
};

export const OutcomeScores: Record<YourOutcome, number> = {
  [YourOutcome.LOSE]: 0,
  [YourOutcome.DRAW]: 3,
  [YourOutcome.WIN]: 6,
};
