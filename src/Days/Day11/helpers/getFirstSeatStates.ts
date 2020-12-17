import { SeatState } from "../Day11.types";

export const getFirstSeatStates = (data: string) =>
  data.split("\n").map((row) => row.split("").map((seat) => seat as SeatState));
