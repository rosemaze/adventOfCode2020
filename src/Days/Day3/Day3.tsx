import React from "react";
import { getGridMap } from "./helpers/getGridMap";
import { getTreeCount } from "./helpers/getTreeCount";
import { GenericDay } from "../../components/GenericDay/GenericDay";

export const Day3 = () => {
  const getResult1 = (gridMap: string[][]) => {
    return `The number of encountered trees: ${getTreeCount({
      gridMap,
      xIncrement: 3,
      yIncrement: 1,
    })}`;
  };

  const getResult2 = (gridMap: string[][]) => {
    const r1d1 = getTreeCount({
      gridMap,
      xIncrement: 1,
      yIncrement: 1,
    });
    const r3d1 = getTreeCount({
      gridMap,
      xIncrement: 3,
      yIncrement: 1,
    });
    const r5d1 = getTreeCount({
      gridMap,
      xIncrement: 5,
      yIncrement: 1,
    });
    const r7d1 = getTreeCount({
      gridMap,
      xIncrement: 7,
      yIncrement: 1,
    });
    const r1d2 = getTreeCount({
      gridMap,
      xIncrement: 1,
      yIncrement: 2,
    });

    return `The number of encountered trees: ${r1d1} x ${r3d1} x ${r5d1} x ${r7d1} x ${r1d2} = ${
      r1d1 * r3d1 * r5d1 * r7d1 * r1d2
    }`;
  };

  return (
    <GenericDay
      dayNumber={3}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getGridMap}
      filePath="data/Day3/puzzleInput1.txt"
    />
  );
};
