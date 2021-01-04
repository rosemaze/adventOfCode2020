import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { CellState, Cube } from "../Day17.types";
import { getActiveNeighbourCellCount } from "./getActiveNeighbourCellCount";
import { getCopied3DArray } from "../../../helpers/getCopied3DArray";
import { getArrayWithLengthAndValue } from "../../../helpers/getArrayWithLengthAndValue";
import { getCopied2DArray } from "../../../helpers/getCopied2DArray";

export const getStateAfterTick = (initialState: Cube): Cube => {
  let newState = getCopied3DArray(initialState);

  // Grow the cube
  // x
  newState = newState.map((zPlane) =>
    zPlane.map((yRow) => [CellState.Inactive, ...yRow, CellState.Inactive])
  );
  // y
  const inactiveRow = getArrayWithLengthAndValue({
    arrayLength: newState[0].length + 2,
    arrayValue: CellState.Inactive,
  });
  newState = newState.map((zPlane) => [
    [...inactiveRow],
    ...zPlane,
    [...inactiveRow],
  ]);
  // z
  let yLength = newState[0].length;
  let xLength = newState[0][0].length;
  let newPlane: CellState[][] = getArrayWithLengthAndValue({
    arrayLength: yLength,
    arrayValue: [],
  });
  newPlane = newPlane.map((_) =>
    getArrayWithLengthAndValue<CellState>({
      arrayLength: xLength,
      arrayValue: CellState.Inactive,
    })
  );
  newState.unshift(getCopied2DArray(newPlane));
  newState.push(getCopied2DArray(newPlane));

  // Make a copy of the original after expansion to use as reference
  const expandedInitialState = getCopied3DArray(newState);

  // Perform transformation on each plane
  expandedInitialState.forEach((zPlane, currentZ) => {
    zPlane.forEach((yRow, currentY) => {
      yRow.forEach((xCell, currentX) => {
        const activeNeighbourCellCount = getActiveNeighbourCellCount({
          x: currentX,
          y: currentY,
          z: currentZ,
          state: expandedInitialState,
        });

        let newCellState = xCell;

        switch (xCell) {
          case CellState.Inactive:
            if (activeNeighbourCellCount === 3) {
              newCellState = CellState.Active;
            }
            break;
          case CellState.Active:
            newCellState =
              activeNeighbourCellCount === 3 || activeNeighbourCellCount === 2
                ? CellState.Active
                : CellState.Inactive;
            break;
          default:
            throwUnreachableCase(xCell);
        }

        newState[currentZ][currentY][currentX] = newCellState;
      });
    });
  });

  return newState;
};
