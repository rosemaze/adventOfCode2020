import { get2DArrayCopy } from "./get2DArrayCopy";
import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { OccupiedSeatFnProps, SeatState } from "../Day11.types";

export const getNewSeatStates = ({
  seatStates,
  toleratedSeatCount,
  occupiedSeatsCountFn,
}: {
  seatStates: SeatState[][];
  toleratedSeatCount: number;
  occupiedSeatsCountFn: (props: OccupiedSeatFnProps) => number;
}) => {
  const newSeatStates: SeatState[][] = get2DArrayCopy(seatStates);

  seatStates.forEach((row, rowIndex) =>
    row.forEach((seat, colIndex) => {
      const occupiedSeatsCount = occupiedSeatsCountFn({
        seatStates,
        rowIndex,
        colIndex,
      });

      switch (seat) {
        case SeatState.Empty:
          // If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
          if (occupiedSeatsCount === 0) {
            newSeatStates[rowIndex][colIndex] = SeatState.Occupied;
          }
          break;
        case SeatState.Occupied:
          // If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
          const isOccupied =
            seatStates[rowIndex][colIndex] === SeatState.Occupied;
          if (isOccupied && occupiedSeatsCount >= toleratedSeatCount) {
            newSeatStates[rowIndex][colIndex] = SeatState.Empty;
          }
          break;
        case SeatState.Floor:
          // Otherwise, the seat's state does not change.
          break;
        default:
          throwUnreachableCase(seat);
      }
    })
  );

  return newSeatStates;
};
