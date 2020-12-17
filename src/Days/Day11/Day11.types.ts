export enum SeatState {
  Empty = "L",
  Occupied = "#",
  Floor = ".",
}

export type SeatIndex = [number, number];

export interface OccupiedSeatFnProps {
  seatStates: string[][];
  rowIndex: number;
  colIndex: number;
}
