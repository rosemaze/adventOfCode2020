import { ShapeScores } from "../Day2.constants";
import { OpponentAction, YourAction } from "../Day2.types";
import { getScoreForRound } from "./getScoreForRound";

export const getYourTotalScoreBasedOnAction = (data: string) => {
  let totalScore = 0;

  data.split("\n").forEach((line) => {
    const [opponent, you] = line.split(" ");

    const scoreForRound = getScoreForRound(
      opponent as OpponentAction,
      you as YourAction
    );

    const scoreForShape = ShapeScores[you as YourAction];

    totalScore += scoreForRound + scoreForShape;
  });

  return totalScore;
};
