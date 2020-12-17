import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getNumbers } from "./helpers/getNumbers";

export const Day9 = () => {
  const getResult1 = (numbers: number[]) => {
    const numbersAfterFirst25 = numbers.slice(25);

    const firstNumberThatCannotBeSummedByPrev25Numbers = numbersAfterFirst25.find(
      (currentNumber, index) => {
        const prev25Numbers = numbers.slice(index, index + 26);
        const currentNumberMatch = prev25Numbers.find((prevNumber) => {
          const remainder = currentNumber - prevNumber;
          const match = prev25Numbers.find(
            (potentialMatch) => potentialMatch === remainder
          );
          return !!match;
        });

        return !currentNumberMatch;
      }
    );

    return `First number that can not be summed by previous 25 numbers: ${firstNumberThatCannotBeSummedByPrev25Numbers}`;
  };

  const getResult2 = (numbers: number[]) => {
    const sum = 542529149;
    let nextIndex = 0;
    let foundContiguousSum = false;

    // TODO: tidy up
    /*
    while (!foundContiguousSum && nextIndex < numbers.length - 1) {
      const contiguousSum = numbers
        .slice(nextIndex) // create copy of "array" for iterating
        .reduce((acc, curr, i, arr) => {
          if (acc >= sum) {
            console.log("too big already", nextIndex);
            if (acc === sum) {
              foundContiguousSum = true;
              console.log(
                "found contiguous set at index",
                nextIndex,
                " for the next numbers from index",
                i
              );
            }

            arr.splice(1);
          } // eject early by mutating iterated copy

          const nextAcc = acc + curr;
          console.log({ nextAcc });
          return nextAcc;
        }, 0);

      nextIndex += 1;
    }
    */

    // Day9.tsx:40 found contiguous set at index 500  for the next numbers from index 17

    const contiguousSet = numbers.slice(500, 518);
    const weakPoint = Math.min(...contiguousSet) + Math.max(...contiguousSet);

    return `The largest and smallest number in the contiguous set summed up = ${weakPoint}`;
  };

  return (
    <GenericDay
      dayNumber={9}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getNumbers}
      filePath="data/Day9/puzzleInput1.txt"
    />
  );
};
