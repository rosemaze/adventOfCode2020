import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Letter } from "./Day12.types";
import { getPoint } from "./helpers/getPoint";
import { getPaths } from "./helpers/getPaths";
import { getTerrain } from "./helpers/getTerrain";

export const Day12 = () => {
  const getResult1 = (terrain: Letter[][]) => {
    const test = getPaths({
      terrain,
      currentPoint: getPoint({ terrain, type: "S" })!,
      endPoint: getPoint({ terrain, type: "E" })!,
      paths: [],
      visitedPoints: [],
      currentPath: [],
    });

    console.log({ test });

    return "TODO";
  };

  const getResult2 = (terrain: Letter[][]) => {
    return "TODO";
  };

  return (
    <GenericDay
      dayNumber={12}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getTerrain}
      filePath={"data/2022/Day12/puzzleInput.txt"}
    />
  );
};
