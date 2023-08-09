import { Letter, LetterToValueMap, Point } from "../Day12.types";
import { getPointAsString } from "./getPointAsString";
import { isClimbable } from "./isClimbable";

export const getPossibleNextPoints = ({
  point,
  terrain,
  visitedPoints,
}: {
  point: Point;
  terrain: Letter[][];
  visitedPoints: string[];
}): Point[] => {
  const possibleDirections: Point[] = [];

  const [currentRow, currentColumn] = point;
  // Up
  if (currentRow > 0) {
    const up = [currentRow - 1, currentColumn] as const;

    if (
      !visitedPoints.includes(getPointAsString(up)) &&
      isClimbable({ currentPoint: point, nextPoint: up, terrain })
    ) {
      possibleDirections.push(up);
    }
  }

  // Down
  if (currentRow < terrain.length - 1) {
    const down = [currentRow + 1, currentColumn] as const;

    if (
      !visitedPoints.includes(getPointAsString(down)) &&
      isClimbable({ currentPoint: point, nextPoint: down, terrain })
    ) {
      possibleDirections.push(down);
    }
  }

  // Left
  if (currentColumn > 0) {
    const left = [currentRow, currentColumn - 1] as const;

    if (
      !visitedPoints.includes(getPointAsString(left)) &&
      isClimbable({ currentPoint: point, nextPoint: left, terrain })
    ) {
      possibleDirections.push(left);
    }
  }

  // Right
  if (currentColumn < terrain[currentRow].length - 1) {
    const right = [currentRow, currentColumn + 1] as const;

    if (
      !visitedPoints.includes(getPointAsString(right)) &&
      isClimbable({
        currentPoint: point,
        nextPoint: right,
        terrain,
      })
    ) {
      possibleDirections.push(right);
    }
  }

  console.log({ possibleDirections, point, visitedPoints });

  // Try to reduce possibilities
  if (possibleDirections.length === 1) {
    return possibleDirections;
  }

  let optimalDirection = possibleDirections.find(
    (possibleDirection) =>
      LetterToValueMap[terrain[possibleDirection[0]][possibleDirection[1]]] >
      LetterToValueMap[terrain[point[0]][point[1]]]
  );

  if (optimalDirection) {
    return [optimalDirection];
  }

  return possibleDirections;

  //const sortedDirections = possibleDirections.sort((a, b) => b[1] - a[1]);
};
