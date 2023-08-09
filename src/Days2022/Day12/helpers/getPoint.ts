import { Point } from "../Day12.types";

export const getPoint = ({
  terrain,
  type,
}: {
  terrain: string[][];
  type: "E" | "S";
}) => {
  let found: null | Point = null;

  for (let i = 0; i < terrain.length && !found; i++) {
    for (let j = 0; j < terrain[i].length && !found; j++) {
      if (terrain[i][j] === type) {
        found = [i, j];
      }
    }
  }

  return found;
};
