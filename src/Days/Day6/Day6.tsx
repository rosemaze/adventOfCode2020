import React from "react";
import { getGroups } from "./helpers/getGroups";
import { getUnionOfYesAnswersByGroupCount } from "./helpers/getUnionOfYesAnswersByGroupCount";
import { getIntersectionOfYesAnswersByGroupCount } from "./helpers/getIntersectionOfYesAnswersByGroupCount";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Group } from "./Days6.types";

export const Day6 = () => {
  const getResult1 = (groups: Group[]) => {
    return `Total number of yes answers by group: ${getUnionOfYesAnswersByGroupCount(
      groups
    )}`;
  };

  const getResult2 = (groups: Group[]) => {
    return `Total number of yes answers by group: ${getIntersectionOfYesAnswersByGroupCount(
      groups
    )}`;
  };

  return (
    <GenericDay
      dayNumber={6}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getGroups}
      filePath="data/Day6/puzzleInput1.txt"
    />
  );
};
