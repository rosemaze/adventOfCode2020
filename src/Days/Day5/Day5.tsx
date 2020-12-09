import React from "react";
import { getBoardingPasses } from "./helpers/getBoardingPasses";
import { getSeatIDs } from "./helpers/getSeatIDs";
import { GenericDay } from "../../components/GenericDay/GenericDay";

export const Day5 = () => {
  const getResult1 = (boardingPasses: string[]) => {
    return `The highest seat number: ${Math.max(
      ...getSeatIDs(boardingPasses)
    )}`;
  };

  const getResult2 = (boardingPasses: string[]) => {
    const seatIDs = getSeatIDs(boardingPasses);
    seatIDs.sort();

    let found = false;
    let currentSeat = 0;
    for (let i: number = 1; i <= seatIDs.length && !found; i++) {
      const precedingSeat = seatIDs[i - 1];

      currentSeat = seatIDs[i];

      found = precedingSeat === currentSeat - 2;
    }

    return `Seat number preceeded by -1 and +1: ${currentSeat - 1}`;
  };

  return (
    <GenericDay
      dayNumber={5}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getBoardingPasses}
      filePath="data/Day5/puzzleInput1.txt"
    />
  );
};
