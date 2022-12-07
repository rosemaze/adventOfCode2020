import { OutcomeScores, ShapeScores } from "../Day2.constants";
import { OpponentAction, YourOutcome } from "../Day2.types";
import { getActionForRound } from "./getActionForRound";

export const getYourTotalScoreBasedOnOutcome = (data: string) => {
  let totalScore = 0;
  data.split("\n").forEach((line) => {
    const [opponent, yourOutcome] = line.split(" ");

    const scoreForShape =
      ShapeScores[
        getActionForRound(
          opponent as OpponentAction,
          yourOutcome as YourOutcome
        )
      ];

    const scoreForRound = OutcomeScores[yourOutcome as YourOutcome];

    totalScore += scoreForShape + scoreForRound;
  });

  return totalScore;
};
