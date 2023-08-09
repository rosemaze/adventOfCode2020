import { Letter, LetterToValueMap, Point } from "../Day12.types";

export const isClimbable = ({
  currentPoint,
  nextPoint,
  terrain,
}: {
  currentPoint: Point;
  nextPoint: Point;
  terrain: Letter[][];
}) => {
  const currentPointValue =
    LetterToValueMap[terrain[currentPoint[0]][currentPoint[1]]];

  const nextPointValue = LetterToValueMap[terrain[nextPoint[0]][nextPoint[1]]];

  return (
    currentPointValue === nextPointValue ||
    currentPointValue + 1 === nextPointValue
  );
};
