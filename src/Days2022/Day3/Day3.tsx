import React from "react";

import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getData } from "./helpers/getData";
import { getSumOfPriorityItems } from "./helpers/getSumOfPriorityItems";

export const Day3 = () => {
  const getResult1 = (data: string) =>
    `The sum of all priority items is ${getSumOfPriorityItems(data)}`;

  const getResult2 = (data: string) => "TODO";

  return (
    <GenericDay
      dayNumber={3}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getData}
      filePath={"data/2022/Day3/puzzleInput.txt"}
    />
  );
};
