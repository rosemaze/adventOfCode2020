export enum CellState {
  Active = "#",
  Inactive = ".",
}

// zyx
export type Cube = CellState[][][];

// wzyx
export type HyperCube = CellState[][][][];
