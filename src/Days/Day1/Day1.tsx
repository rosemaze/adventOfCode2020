import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../styles/DayHeader.style";
import {
  getNumbersAndSelfIndexedNumbers,
  NumbersAndSelfIndexed,
} from "./helpers/getNumbersAndSelfIndexedNumbers";
import { getPairedSums } from "./helpers/getPairedSums";

export const Day1 = () => {
  const [
    numbersAndSelfIndexed,
    setNumbersAndSelfIndexed,
  ] = React.useState<NumbersAndSelfIndexed>();
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

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
      setResult1("Error: No data");
      return;
    }

    const { numbers, numbersIndexedByItself } = numbersAndSelfIndexed;

    const remainder = numbers.find(
      (num) => !!numbersIndexedByItself[2020 - num]
    );

    if (remainder) {
      setResult1(
        `${remainder} x ${2020 - remainder} = ${remainder * (2020 - remainder)}`
      );
    }
  }, [numbersAndSelfIndexed]);

  const getResult2 = React.useCallback(() => {
    if (!numbersAndSelfIndexed) {
      setResult2("Error: No data");
      return;
    }

    const { numbers, numbersIndexedByItself } = numbersAndSelfIndexed;
    const { pairedSums, pairedSumsIndividuals } = getPairedSums(numbers);

    const foundPairedSum = pairedSums.find(
      (pairedSum) => !!numbersIndexedByItself[2020 - pairedSum]
    );

    if (!foundPairedSum) {
      setResult2("Error: No three numbers add up to 2020");
      return;
    }
    const pairedSum1 = pairedSumsIndividuals[foundPairedSum][0];
    const pairedSum2 = pairedSumsIndividuals[foundPairedSum][1];
    const remainder = 2020 - foundPairedSum;

    setResult2(
      `${pairedSum1} x ${pairedSum2} x ${remainder} = ${
        pairedSum1 * pairedSum2 * remainder
      }`
    );
  }, [numbersAndSelfIndexed]);

  return (
    <>
      <DayHeader>Day 1</DayHeader>
      <input type="button" value="Get result 1" onClick={getResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={getResult2} />
      <div>{result2}</div>
    </>
  );
};
