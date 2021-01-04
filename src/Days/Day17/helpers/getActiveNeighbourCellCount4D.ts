import { CellState, Cube, HyperCube } from "../Day17.types";

export const getActiveNeighbourCellCount4D = ({
  w,
  x,
  y,
  z,
  state,
}: {
  w: number;
  x: number;
  y: number;
  z: number;
  state: HyperCube;
}) => {
  let activeCount = 0;
  [w - 1, w, w + 1].forEach((wIndex) =>
    [z - 1, z, z + 1].forEach((zIndex) =>
      [y - 1, y, y + 1].forEach((yIndex) =>
        [x - 1, x, x + 1].forEach((xIndex) => {
          // Don't include self
          if (xIndex === x && yIndex === y && zIndex === z && wIndex === w) {
            return;
          }

          const wLength = state.length;
          const zLength = state[0].length;
          const yLength = state[0][0].length;
          const xLength = state[0][0][0].length;
          // Don't go out of bounds
          if (
            zIndex >= zLength ||
            zIndex < 0 ||
            yIndex >= yLength ||
            yIndex < 0 ||
            xIndex >= xLength ||
            xIndex < 0 ||
            wIndex >= wLength ||
            wIndex < 0
          ) {
            return;
          }

          if (state[wIndex][zIndex][yIndex][xIndex] === CellState.Active) {
            activeCount++;
          }
        })
      )
    )
  );

  return activeCount;
};
