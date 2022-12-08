import React from "react";

import { GenericDay } from "../../components/GenericDay/GenericDay";
import { PairedAssignedRange } from "./Day4.types";
import { getPairedAssignedRanges } from "./helpers/getPairedAssignedRanges";

export const Day4 = () => {
  const isFullyContained = (pair: PairedAssignedRange) =>
    (pair.first.start >= pair.second.start &&
      pair.first.end <= pair.second.end) ||
    (pair.first.start <= pair.second.start &&
      pair.first.end >= pair.second.end);

  const getResult1 = (pairedAssignedRanges: PairedAssignedRange[]) => {
    const numberOfFullyContainedRanges = pairedAssignedRanges.filter((pair) =>
      isFullyContained(pair)
    ).length;

    return `${numberOfFullyContainedRanges} ranges are fully contained by another range`;
  };

  const getResult2 = (pairedAssignedRanges: PairedAssignedRange[]) => {
    const numberOfOverlappingRanges = pairedAssignedRanges.filter(
      (pair) =>
        (pair.first.end >= pair.second.start &&
          pair.first.end <= pair.second.end) ||
        (pair.first.start <= pair.second.end &&
          pair.first.start >= pair.second.start) ||
        isFullyContained(pair)
    ).length;

    return `${numberOfOverlappingRanges} ranges are overlapped by another range`;
  };

  return (
    <GenericDay
      dayNumber={4}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getPairedAssignedRanges}
      filePath={"data/2022/Day4/puzzleInput.txt"}
    />
  );
};
