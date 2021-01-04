import { Turns } from "../Day15.type";

export const getSpokenNumberOnTurn = ({
  nthTurn,
  gameNumbers,
}: {
  nthTurn: number;
  gameNumbers: number[];
}) => {
  const numberToTurns: Map<number, Turns> = new Map();
  const spokenNumbers: number[] = [];

  for (let i = 0; i < gameNumbers.length; i++) {
    spokenNumbers.push(gameNumbers[i]);
    numberToTurns.set(gameNumbers[i], { lastTurn: i });
  }

  for (let i = gameNumbers.length; i < nthTurn; i++) {
    const lastSpokenNumber = spokenNumbers[i - 1];
    const turnsForLastSpokenNumber = numberToTurns.get(lastSpokenNumber);
    const isFirstTimeForLastSpokenNumber =
      turnsForLastSpokenNumber &&
      turnsForLastSpokenNumber.secondLastTurn === undefined;

    if (isFirstTimeForLastSpokenNumber) {
      // First time last number was spoken, speak 0 this turn
      spokenNumbers.push(0);
      const turnsForZeroSpoken = numberToTurns.get(0);
      numberToTurns.set(0, {
        lastTurn: i,
        secondLastTurn: turnsForZeroSpoken && turnsForZeroSpoken.lastTurn,
      });
      continue;
    }

    if (!turnsForLastSpokenNumber) {
      console.log("error!");
      continue;
    }

    // Not first time this number spoken, speak difference in turns
    const { lastTurn, secondLastTurn } = turnsForLastSpokenNumber;
    const differenceInTurns = lastTurn - secondLastTurn!;
    spokenNumbers.push(differenceInTurns);

    const turnsForSpokenNumber = numberToTurns.get(differenceInTurns);
    numberToTurns.set(differenceInTurns, {
      lastTurn: i,
      secondLastTurn: turnsForSpokenNumber && turnsForSpokenNumber.lastTurn,
    });
  }

  return spokenNumbers[nthTurn - 1];
};
