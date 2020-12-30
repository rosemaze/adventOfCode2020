import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getJoltages } from "./helpers/getJoltages";
import { getBranchCount } from "./helpers/getBranchCount";

export const Day10 = () => {
  const getResult1 = (joltages: number[]) => {
    joltages.sort((a, b) => a - b);

    let currentJolts = 0;
    let numOf1JoltsDifferences = 0;
    let numOf3JoltsDifferences = 0;
    joltages.forEach((joltsRating) => {
      const joltsDifference = joltsRating - currentJolts;

      if (joltsDifference === 1) {
        numOf1JoltsDifferences++;
      }

      if (joltsDifference === 3) {
        numOf3JoltsDifferences++;
      }

      currentJolts = joltsRating;
    });

    // Add own adapter
    numOf3JoltsDifferences++;

    const result = numOf3JoltsDifferences * numOf1JoltsDifferences;

    return `Number of 1-jolt differences multiplied by the number of 3-jolt differences = ${result}`;
  };

  const getResult2 = (joltages: number[]) => {
    joltages.sort((a, b) => a - b);

    return `Number of possible adapter combinations: ${getBranchCount(
      joltages
    )}`;
  };

  return (
    <GenericDay
      dayNumber={10}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getJoltages}
      filePath="data/Day10/puzzleInput.txt"
    />
  );
};
