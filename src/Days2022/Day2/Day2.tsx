import React from "react";

import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getData } from "../../helpers/getData";
import { getYourTotalScoreBasedOnAction } from "./helpers/getYourTotalScoreBasedOnAction";
import { getYourTotalScoreBasedOnOutcome } from "./helpers/getYourTotalScoreBasedOnOutcome";

export const Day2 = () => {
  const getResult1 = (data: string) =>
    `My total score is based on pre-determined actions is ${getYourTotalScoreBasedOnAction(
      data
    )}`;

  const getResult2 = (data: string) =>
    `My total score based on pre-determined outcomes is ${getYourTotalScoreBasedOnOutcome(
      data
    )}`;

  return (
    <GenericDay
      dayNumber={2}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getData}
      filePath={"data/2022/Day2/puzzleInput.txt"}
    />
  );
};
