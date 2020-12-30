import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getContiguousIndices } from "./helpers/getContiguousIndices";
import { getNumbers } from "./helpers/getNumbers";
import { getNumberUnsummedByPreamble } from "./helpers/getNumberUnsummedByPreamble";

export const Day9 = () => {
  const getResult1 = (numbers: number[]) => {
    return `First number that can not be summed by previous 25 numbers: ${getNumberUnsummedByPreamble(
      { numbers, preambleLength: 25 }
    )}`;
  };

  const getResult2 = (numbers: number[]) => {
    const invalidSum =
      getNumberUnsummedByPreamble({ numbers, preambleLength: 25 }) || 0;

    const { startIndex, endIndex } = getContiguousIndices({
      numbers,
      invalidSum,
    });

    // Day9.tsx:40 found contiguous set at index 500  for the next numbers until index 18
    console.log({ startIndex, endIndex });
    const contiguousSet = numbers.slice(startIndex, endIndex);
    const weakPoint = Math.min(...contiguousSet) + Math.max(...contiguousSet);

    return `The largest and smallest number in the contiguous set summed up = ${weakPoint}`;
  };

  return (
    <GenericDay
      dayNumber={9}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getNumbers}
      filePath="data/Day9/puzzleInput2.txt"
    />
  );
};
