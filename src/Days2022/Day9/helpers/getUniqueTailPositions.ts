import { KnotPosition } from "../Day9.types";

export const getUniqueTailPositions = ({
  tail,
  tailPositions,
}: {
  tail: KnotPosition;
  tailPositions: string[];
}) => {
  const tailCoords = `r${tail.row}_c${tail.column}`;

  if (!tailPositions.includes(tailCoords)) {
    tailPositions.push(tailCoords);
  }

  return tailPositions;
};
