import React from "react";
import { getNumbersAndSelfIndexedNumbers } from "./helpers/getNumbersAndSelfIndexedNumbers";
import { getPairedSums } from "./helpers/getPairedSums";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { NumbersAndSelfIndexed } from "./Day1.types";

export const Day1 = () => {
  const getResult1 = (data: NumbersAndSelfIndexed) => {
    const { numbers, numbersIndexedByItself } = data;

    const remainder = numbers.find(
      (num) => !!numbersIndexedByItself[2020 - num]
    );

    if (!remainder) {
      return "No remainder found";
    }

    return `${remainder} x ${2020 - remainder} = ${
      remainder * (2020 - remainder)
    }`;
  };

  const getResult2 = (data: NumbersAndSelfIndexed) => {
    const { numbers, numbersIndexedByItself } = data;
    const { pairedSums, pairedSumsIndividuals } = getPairedSums(numbers);

    const foundPairedSum = pairedSums.find(
      (pairedSum) => !!numbersIndexedByItself[2020 - pairedSum]
    );

    if (!foundPairedSum) {
      return "Error: No three numbers add up to 2020";
    }

    const pairedSum1 = pairedSumsIndividuals[foundPairedSum][0];
    const pairedSum2 = pairedSumsIndividuals[foundPairedSum][1];
    const remainder = 2020 - foundPairedSum;

    return `${pairedSum1} x ${pairedSum2} x ${remainder} = ${
      pairedSum1 * pairedSum2 * remainder
    }`;
  };

  return (
    <GenericDay
      dayNumber={1}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getNumbersAndSelfIndexedNumbers}
      filePath={"data/Day1/puzzleInput1.txt"}
    />
  );
};
