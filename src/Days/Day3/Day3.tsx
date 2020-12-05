import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../components/Day/styles/DayHeader.style";
import { getGridMap } from "./helpers/getGridMap";
import { getTreeCount } from "./helpers/getTreeCount";
import { Day } from "../../components/Day/Day";

export const Day3 = () => {
  const [gridMap, setGridMap] = React.useState<string[][]>([]);

  const { data } = useReadData("data/Day3/puzzleInput1.txt");

  React.useEffect(() => {
    setGridMap(getGridMap(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (gridMap.length === 0) {
      return "Error: no data";
    }

    return `The number of encountered trees: ${getTreeCount({
      gridMap,
      xIncrement: 3,
      yIncrement: 1,
    })}`;
  }, [gridMap]);

  const getResult2 = React.useCallback(() => {
    if (gridMap.length === 0) {
      return "Error: no data";
    }

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
  }, [gridMap]);

  return <Day dayNumber={1} getResult1={getResult1} getResult2={getResult2} />;
};
