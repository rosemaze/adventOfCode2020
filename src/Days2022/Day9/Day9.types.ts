export interface KnotPosition {
  row: number;
  column: number;
}

export enum Direction {
  Up = "U",
  Down = "D",
  Left = "L",
  Right = "R",
}

export interface Instruction {
  direction: Direction;
  steps: number;
}
