import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { CellState, HyperCube } from "../Day17.types";
import { getCopied3DArray } from "../../../helpers/getCopied3DArray";
import { getArrayWithLengthAndValue } from "../../../helpers/getArrayWithLengthAndValue";
import { getCopied2DArray } from "../../../helpers/getCopied2DArray";
import { getCopied4DArray } from "../../../helpers/getCopied4DArray";
import { getActiveNeighbourCellCount4D } from "./getActiveNeighbourCellCount4D";

export const getStateAfterTick4D = (initialState: HyperCube): HyperCube => {
  let newState = getCopied4DArray(initialState);

  // Grow the hypercube
  // x
  newState = newState.map((wHyperPlane) =>
    wHyperPlane.map((zPlane) =>
      zPlane.map((yRow) => [CellState.Inactive, ...yRow, CellState.Inactive])
    )
  );
  // y
  const inactiveRow = getArrayWithLengthAndValue({
    arrayLength: newState[0][0].length + 2,
    arrayValue: CellState.Inactive,
  });
  newState = newState.map((wHyperPlane) =>
    wHyperPlane.map((zPlane) => [[...inactiveRow], ...zPlane, [...inactiveRow]])
  );
  // z
  let yLength = newState[0][0].length;
  let xLength = newState[0][0][0].length;
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
  newState.forEach((wHyperPlane) => {
    wHyperPlane.unshift(getCopied2DArray(newPlane));
    wHyperPlane.push(getCopied2DArray(newPlane));
  });
  // w
  let zLength = newState[0].length;
  let newHyperPlane: CellState[][][] = getArrayWithLengthAndValue({
    arrayLength: zLength,
    arrayValue: newPlane,
  });
  newState.unshift(getCopied3DArray(newHyperPlane));
  newState.push(getCopied3DArray(newHyperPlane));

  // Make a copy of the original after expansion to use as reference
  const expandedInitialState = getCopied4DArray(newState);

  // Perform transformation on each plane
  expandedInitialState.forEach((wHyperPlane, currentW) => {
    wHyperPlane.forEach((zPlane, currentZ) => {
      zPlane.forEach((yRow, currentY) => {
        yRow.forEach((xCell, currentX) => {
          const activeNeighbourCellCount = getActiveNeighbourCellCount4D({
            x: currentX,
            y: currentY,
            z: currentZ,
            w: currentW,
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

          newState[currentW][currentZ][currentY][currentX] = newCellState;
        });
      });
    });
  });

  return newState;
};
