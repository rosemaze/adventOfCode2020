import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../styles/DayHeader.style";
import { getGridMap } from "./helpers/getGridMap";
import { getTreeCount } from "./helpers/getTreeCount";

export const Day3 = () => {
  const [gridMap, setGridMap] = React.useState<string[][]>(new Array(Array()));
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const { data } = useReadData("data/Day3/puzzleInput1.txt");

  React.useEffect(() => {
    setGridMap(getGridMap(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (gridMap.length === 0) {
      return;
    }

    setResult1(
      `The number of encountered trees: ${getTreeCount({
        gridMap,
        xIncrement: 3,
        yIncrement: 1,
      })}`
    );
  }, [gridMap]);

  const getResult2 = React.useCallback(() => {
    if (gridMap.length === 0) {
      return;
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

    setResult2(
      `The number of encountered trees: ${r1d1} x ${r3d1} x ${r5d1} x ${r7d1} x ${r1d2} = ${
        r1d1 * r3d1 * r5d1 * r7d1 * r1d2
      }`
    );
  }, [gridMap]);

  return (
    <>
      <DayHeader>Day 3</DayHeader>
      <input type="button" value="Get result 1" onClick={getResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={getResult2} />
      <div>{result2}</div>
    </>
  );
};
