export enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

export enum Action {
  MoveNorth = "N",
  MoveSouth = "S",
  MoveEast = "E",
  MoveWest = "W",
  RotateLeft = "L",
  RotateRight = "R",
  Forward = "F",
}

export interface Instruction {
  action: Action;
  steps: number;
}

export interface Waypoint {
  x: {
    direction: Direction;
    steps: number;
  };
  y: {
    direction: Direction;
    steps: number;
  };
}

export interface Ship {
  x: number;
  y: number;
  direction: Direction;
  waypoint?: Waypoint;
}
