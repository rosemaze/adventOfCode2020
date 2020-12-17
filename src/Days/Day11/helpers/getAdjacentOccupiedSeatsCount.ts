import { OccupiedSeatFnProps, SeatState } from "../Day11.types";

export const getAdjacentOccupiedSeatsCount = ({
  seatStates,
  rowIndex,
  colIndex,
}: OccupiedSeatFnProps) => {
  const left = Math.max(...[-1, colIndex - 1]);
  const right = Math.min(...[colIndex + 1, seatStates[rowIndex].length]);
  const top = Math.max(...[-1, rowIndex - 1]);
  const bottom = Math.min(...[rowIndex + 1, seatStates.length]);

  const topSeatIndex = [top, colIndex];
  const bottomSeatIndex = [bottom, colIndex];
  const rightSeatIndex = [rowIndex, right];
  const leftSeatIndex = [rowIndex, left];
  const topLeftSeatIndex = [top, left];
  const topRightSeatIndex = [top, right];
  const bottomLeftSeatIndex = [bottom, left];
  const bottomRightSeatIndex = [bottom, right];

  const adjacentSeatIndicesInBounds = [
    topSeatIndex,
    bottomSeatIndex,
    rightSeatIndex,
    leftSeatIndex,
    topLeftSeatIndex,
    topRightSeatIndex,
    bottomLeftSeatIndex,
    bottomRightSeatIndex,
  ].filter(
    (adjacentSeatIndex) =>
      adjacentSeatIndex[0] > -1 &&
      adjacentSeatIndex[0] < seatStates.length &&
      adjacentSeatIndex[1] > -1 &&
      adjacentSeatIndex[1] < seatStates[0].length
  );

  const adjacentSeatIndices = adjacentSeatIndicesInBounds.filter(
    (adjacentSeatIndex) => {
      // not current seat
      if (adjacentSeatIndex[0] === rowIndex) {
        return adjacentSeatIndex[1] !== colIndex;
      }
      if (adjacentSeatIndex[1] === colIndex) {
        return adjacentSeatIndex[0] !== rowIndex;
      }
      return true;
    }
  );

  const count = adjacentSeatIndices.filter(
    (adjacentSeatIndex) =>
      seatStates[adjacentSeatIndex[0]][adjacentSeatIndex[1]] ===
      SeatState.Occupied
  ).length;

  return count;
};
