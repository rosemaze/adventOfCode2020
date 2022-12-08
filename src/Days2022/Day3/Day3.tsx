import React from "react";

import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getItems } from "./helpers/getItems";
import { getSumOfGroupPriorityItems } from "./helpers/getSumOfGroupPriorityItems";
import { getSumOfPriorityItems } from "./helpers/getSumOfPriorityItems";

export const Day3 = () => {
  const getResult1 = (items: string[][]) =>
    `The sum of all priority items is ${getSumOfPriorityItems(items)}`;

  const getResult2 = (items: string[][]) =>
    `The sum of all group priority items is ${getSumOfGroupPriorityItems(
      items
    )}`;

  return (
    <GenericDay
      dayNumber={3}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getItems}
      filePath={"data/2022/Day3/puzzleInput.txt"}
    />
  );
};
