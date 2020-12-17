import { OccupiedSeatFnProps, SeatState } from "../Day11.types";
import { get2DArrayCopy } from "./get2DArrayCopy";
import { getNewSeatStates } from "./getNewSeatStates";

export const getOccupiedSeatsAndRoundsCount = ({
  seatStates,
  occupiedSeatsCountFn,
}: {
  seatStates: SeatState[][];
  occupiedSeatsCountFn: (props: OccupiedSeatFnProps) => number;
}) => {
  let rounds = 1;
  let prevStates: SeatState[][] = get2DArrayCopy(seatStates);
  let newStates: SeatState[][] = getNewSeatStates({
    seatStates: get2DArrayCopy(seatStates),
    toleratedSeatCount: 5,
    occupiedSeatsCountFn,
  });

  while (newStates.flat().toString() !== prevStates.flat().toString()) {
    prevStates = get2DArrayCopy(newStates);
    newStates = getNewSeatStates({
      seatStates: get2DArrayCopy(newStates),
      toleratedSeatCount: 5,
      occupiedSeatsCountFn,
    });
    rounds++;
  }

  const occupiedSeats = newStates
    .flat()
    .filter((seat) => seat === SeatState.Occupied).length;

  return { rounds, occupiedSeats };
};
