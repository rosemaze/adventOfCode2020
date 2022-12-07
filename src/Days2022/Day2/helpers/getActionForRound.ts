import { OpponentAction, YourAction, YourOutcome } from "../Day2.types";

export const getActionForRound = (
  opponent: OpponentAction,
  yourOutcome: YourOutcome
) => {
  if (
    [
      OpponentAction.Rock + YourOutcome.DRAW,
      OpponentAction.Paper + YourOutcome.LOSE,
      OpponentAction.Scissors + YourOutcome.WIN,
    ].includes(opponent + yourOutcome)
  ) {
    return YourAction.Rock;
  } else if (
    [
      OpponentAction.Rock + YourOutcome.WIN,
      OpponentAction.Paper + YourOutcome.DRAW,
      OpponentAction.Scissors + YourOutcome.LOSE,
    ].includes(opponent + yourOutcome)
  ) {
    return YourAction.Paper;
  } else if (
    [
      OpponentAction.Rock + YourOutcome.LOSE,
      OpponentAction.Paper + YourOutcome.WIN,
      OpponentAction.Scissors + YourOutcome.DRAW,
    ].includes(opponent + yourOutcome)
  ) {
    return YourAction.Scissors;
  }

  // Should never get here
  return YourAction.Paper;
};
