import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { SeatState } from "./Day11.types";
import { getFirstSeatStates } from "./helpers/getFirstSeatStates";
import { getVisibleOccupiedSeatsCount } from "./helpers/getVisibleOccupiedSeatsCount";
import { getAdjacentOccupiedSeatsCount } from "./helpers/getAdjacentOccupiedSeatsCount";
import { getOccupiedSeatsAndRoundsCount } from "./helpers/getOccupiedSeatsAndRounds";

export const Day11 = () => {
  const getResult1 = (seatStates: SeatState[][]) => {
    const { rounds, occupiedSeats } = getOccupiedSeatsAndRoundsCount({
      seatStates,
      occupiedSeatsCountFn: getAdjacentOccupiedSeatsCount,
    });

    return `Number of occupied seats after ${rounds} rounds: ${occupiedSeats}`;
  };

  const getResult2 = (seatStates: SeatState[][]) => {
    const { rounds, occupiedSeats } = getOccupiedSeatsAndRoundsCount({
      seatStates,
      occupiedSeatsCountFn: getVisibleOccupiedSeatsCount,
    });

    return `Number of occupied seats after ${rounds} rounds: ${occupiedSeats}`;
  };

  return (
    <GenericDay
      dayNumber={11}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getFirstSeatStates}
      filePath="data/Day11/puzzleInput1.txt"
    />
  );
};
