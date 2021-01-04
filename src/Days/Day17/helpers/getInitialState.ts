import { CellState, Cube } from "../Day17.types";

export const getInitialState = (data: string): Cube =>
  [0].map((_) =>
    data
      .split("\n")
      .map((line) => line.split("").map((cell) => cell as CellState))
  );
