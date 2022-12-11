import { Direction, KnotPosition } from "../Day9.types";

export const getHeadPosition = (direction: Direction, head: KnotPosition) => {
  let { row: headRow, column: headColumn } = head;

  switch (direction) {
    case Direction.Up:
      headRow -= 1;
      break;

    case Direction.Down:
      headRow += 1;
      break;

    case Direction.Left:
      headColumn -= 1;
      break;

    case Direction.Right:
      headColumn += 1;
      break;
  }

  return { row: headRow, column: headColumn };
};
