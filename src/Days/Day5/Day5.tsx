import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { getBoardingPasses } from "./helpers/getBoardingPasses";
import { getBinarySearchedSpace } from "./helpers/getBinarySearchedSpace";
import { getSeatID } from "./helpers/getSeatID";
import { Day } from "../../components/Day/Day";

export const Day5 = () => {
  const [boardingPasses, setBoardingPasses] = React.useState<string[]>([]);
  const [seatIDs, setSeatIDs] = React.useState<number[]>([]);

  const { data } = useReadData("data/Day5/puzzleInput1.txt");

  React.useEffect(() => {
    setBoardingPasses(getBoardingPasses(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (boardingPasses.length === 0) {
      return "Error: no data";
    }

    const allSeatIDs = boardingPasses.map((boardingPass) => {
      const row = getBinarySearchedSpace({
        characters: boardingPass.slice(0, 7),
        space: 128,
        floor: 0,
        upperCharacter: "F",
        lowerCharacter: "B",
      });

      const column = getBinarySearchedSpace({
        characters: boardingPass.slice(-3),
        space: 8,
        floor: 0,
        upperCharacter: "L",
        lowerCharacter: "R",
      });

      return getSeatID({ row, column, columnSize: 8 });
    });

    // Set this for getResult2
    allSeatIDs.sort();
    setSeatIDs(allSeatIDs);

    return `The highest seat number: ${allSeatIDs[allSeatIDs.length - 1]}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardingPasses.length, boardingPasses]);

  const getResult2 = React.useCallback(() => {
    if (seatIDs.length === 0) {
      return "Error: Please get Result 1 first";
    }

    let found = false;
    let currentSeat = 0;
    for (let i: number = 1; i <= seatIDs.length && !found; i++) {
      const precedingSeat = seatIDs[i - 1];

      currentSeat = seatIDs[i];

      found = precedingSeat === currentSeat - 2;
    }

    return `Seat number preceeded by -1 and +1: ${currentSeat - 1}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatIDs.length, seatIDs]);

  return <Day dayNumber={5} getResult1={getResult1} getResult2={getResult2} />;
};
