import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../styles/DayHeader.style";
import { getBoardingPasses } from "./helpers/getBoardingPasses";
import { getBinarySearchedSpace } from "./helpers/getBinarySearchedSpace";
import { getSeatID } from "./helpers/getSeatID";

export const Day5 = () => {
  const [boardingPasses, setBoardingPasses] = React.useState<string[]>([]);
  const [seatIDs, setSeatIDs] = React.useState<number[]>([]);
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const { data } = useReadData("data/Day5/puzzleInput1.txt");

  React.useEffect(() => {
    setBoardingPasses(getBoardingPasses(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (boardingPasses.length === 0) {
      setResult1(`No data`);
      return;
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

    console.log({ allSeatIDs });

    setSeatIDs(allSeatIDs);

    setResult1(`The highest seat number: ${Math.max(...seatIDs)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardingPasses.length, boardingPasses]);

  const getResult2 = React.useCallback(() => {
    if (seatIDs.length === 0) {
      setResult2(`Please get Result 1 first`);
      return;
    }

    let found = false;
    let currentSeat = 0;
    const sortedSeatIDs = [...seatIDs];
    sortedSeatIDs.sort();
    for (let i: number = 1; i <= sortedSeatIDs.length && !found; i++) {
      const precedingSeat = sortedSeatIDs[i - 1];
      currentSeat = sortedSeatIDs[i];
      console.log({ precedingSeat, currentSeat });

      found = precedingSeat === currentSeat - 2;
    }

    setResult2(`Seat number preceeded by -1 and +1: ${currentSeat - 1}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatIDs.length, seatIDs]);

  return (
    <>
      <DayHeader>Day 5</DayHeader>
      <input type="button" value="Get result 1" onClick={getResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={getResult2} />
      <div>{result2}</div>
    </>
  );
};
