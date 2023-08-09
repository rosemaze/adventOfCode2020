import { Letter, Point } from "../Day12.types";
import { areEqualPoints } from "./areEqualPoints";
import { getPointAsString } from "./getPointAsString";
import { getPossibleNextPoints } from "./getPossibleNextPoints";

let stop = 0;

export const getPaths = ({
  terrain,
  currentPoint,
  endPoint,
  paths,
  visitedPoints,
  currentPath,
}: {
  terrain: Letter[][];
  currentPoint: Point;
  endPoint: Point;
  paths: string[][];
  visitedPoints: string[];
  currentPath: string[];
}) => {
  const nextCurrentPath = [...currentPath, getPointAsString(currentPoint)];

  console.log({ nextCurrentPath, currentPoint, endPoint });

  if (areEqualPoints(currentPoint, endPoint)) {
    console.log(
      `We found a path to the end with ${nextCurrentPath.length - 1} steps`,
      nextCurrentPath
    );
  } else {
    const possibleNextPoints = getPossibleNextPoints({
      point: currentPoint,
      terrain,
      visitedPoints,
    });

    console.log({ possibleNextPoints });

    possibleNextPoints.forEach((possibleNextPoint) => {
      stop++;
      if (true || stop < 20) {
        getPaths({
          terrain,
          currentPoint: possibleNextPoint,
          endPoint,
          paths,
          visitedPoints: [
            ...visitedPoints,
            ...possibleNextPoints.map((point) => getPointAsString(point)),
            getPointAsString(currentPoint),
          ],
          currentPath: nextCurrentPath,
        });
      }
    });
  }
};
