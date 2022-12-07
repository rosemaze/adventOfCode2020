import React from "react";

import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getCaloriesForEachElf } from "./helpers/getCalorieList";

export const Day1 = () => {
  const getResult1 = (data: Array<number>) =>
    `The elf with the most calories has ${data
      .sort((a, b) => a - b)
      .pop()} calories`;

  const getResult2 = (data: Array<number>) =>
    `The top three elves with the most calories has ${data
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((acc, cur) => acc + cur, 0)} calories`;

  return (
    <GenericDay
      dayNumber={1}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getCaloriesForEachElf}
      filePath={"data/2022/Day1/puzzleInput.txt"}
    />
  );
};
