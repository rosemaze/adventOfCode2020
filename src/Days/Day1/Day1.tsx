import React from "react";
import { useReadData } from "../../hooks/useReadData";
import {
  getNumbersAndSelfIndexedNumbers,
  NumbersAndSelfIndexed,
} from "./helpers/getNumbersAndSelfIndexedNumbers";
import { getPairedSums } from "./helpers/getPairedSums";
import { Day } from "../../components/Day/Day";

export const Day1 = () => {
  const [
    numbersAndSelfIndexed,
    setNumbersAndSelfIndexed,
  ] = React.useState<NumbersAndSelfIndexed>();

  const { data } = useReadData("data/Day1/puzzleInput1.txt");

  React.useEffect(() => {
    setNumbersAndSelfIndexed(
      getNumbersAndSelfIndexedNumbers({
        data,
        delimiter: "\n",
      })
    );
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (!numbersAndSelfIndexed) {
      return "Error: No data";
    }

    const { numbers, numbersIndexedByItself } = numbersAndSelfIndexed;

    const remainder = numbers.find(
      (num) => !!numbersIndexedByItself[2020 - num]
    );

    if (!remainder) {
      return "No remainder found";
    }

    return `${remainder} x ${2020 - remainder} = ${
      remainder * (2020 - remainder)
    }`;
  }, [numbersAndSelfIndexed]);

  const getResult2 = React.useCallback(() => {
    if (!numbersAndSelfIndexed) {
      return "Error: No data";
    }

    const { numbers, numbersIndexedByItself } = numbersAndSelfIndexed;
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
  }, [numbersAndSelfIndexed]);

  return <Day dayNumber={1} getResult1={getResult1} getResult2={getResult2} />;
};
