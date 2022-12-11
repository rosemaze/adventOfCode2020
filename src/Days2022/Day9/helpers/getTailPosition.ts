import { KnotPosition } from "../Day9.types";

export const getTailPosition = ({
  head,
  tail,
}: {
  head: KnotPosition;
  tail: KnotPosition;
}) => {
  let { row: tailRow, column: tailColumn } = tail;

  const rowDifference = Math.abs(tail.row - head.row);
  const columnDifference = Math.abs(tail.column - head.column);

  if (
    (rowDifference === 2 && columnDifference === 2) ||
    (rowDifference === 2 && columnDifference === 1) ||
    (columnDifference === 2 && rowDifference === 1)
  ) {
    tailRow = tail.row > head.row ? tailRow - 1 : tailRow + 1;
    tailColumn = tail.column > head.column ? tailColumn - 1 : tailColumn + 1;
  } else if (rowDifference === 2) {
    tailRow = tail.row > head.row ? tailRow - 1 : tailRow + 1;
  } else if (columnDifference === 2) {
    tailColumn = tail.column > head.column ? tailColumn - 1 : tailColumn + 1;
  }

  return { row: tailRow, column: tailColumn };
};
