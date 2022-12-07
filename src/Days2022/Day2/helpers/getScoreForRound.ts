import { OpponentAction, YourAction } from "../Day2.types";

export const getScoreForRound = (opponent: OpponentAction, you: YourAction) => {
  if (
    [
      OpponentAction.Paper + YourAction.Paper,
      OpponentAction.Rock + YourAction.Rock,
      OpponentAction.Scissors + YourAction.Scissors,
    ].includes(opponent + you)
  ) {
    // Draw
    return 3;
  } else if (
    [
      OpponentAction.Paper + YourAction.Scissors,
      OpponentAction.Rock + YourAction.Paper,
      OpponentAction.Scissors + YourAction.Rock,
    ].includes(opponent + you)
  ) {
    // Win
    return 6;
  } else if (
    [
      OpponentAction.Paper + YourAction.Rock,
      OpponentAction.Rock + YourAction.Scissors,
      OpponentAction.Scissors + YourAction.Paper,
    ].includes(opponent + you)
  ) {
    // Lose
    return 0;
  }

  // Should never reach here
  return 0;
};
