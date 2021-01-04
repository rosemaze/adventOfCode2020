import { CellState, Cube } from "../Day17.types";

export const getActiveNeighbourCellCount = ({
  x,
  y,
  z,
  state,
}: {
  x: number;
  y: number;
  z: number;
  state: Cube;
}) => {
  let activeCount = 0;
  [z - 1, z, z + 1].forEach((zIndex) =>
    [y - 1, y, y + 1].forEach((yIndex) =>
      [x - 1, x, x + 1].forEach((xIndex) => {
        // Don't include self
        if (xIndex === x && yIndex === y && zIndex === z) {
          return;
        }

        const zLength = state.length;
        const yLength = state[0].length;
        const xLength = state[0][0].length;
        // Don't go out of bounds
        if (
          zIndex >= zLength ||
          zIndex < 0 ||
          yIndex >= yLength ||
          yIndex < 0 ||
          xIndex >= xLength ||
          xIndex < 0
        ) {
          return;
        }

        if (state[zIndex][yIndex][xIndex] === CellState.Active) {
          activeCount++;
        }
      })
    )
  );

  return activeCount;
};
