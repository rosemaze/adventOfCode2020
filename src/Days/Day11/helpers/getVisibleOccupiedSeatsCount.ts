import { OccupiedSeatFnProps, SeatIndex, SeatState } from "../Day11.types";

export const getVisibleOccupiedSeatsCount = ({
  seatStates,
  rowIndex,
  colIndex,
}: OccupiedSeatFnProps) => {
  const leftSeats: SeatIndex[] = [];
  for (let i = colIndex - 1; i >= 0; i--) {
    leftSeats.push([rowIndex, i]);
  }

  const rightSeats: SeatIndex[] = [];
  for (let i = colIndex + 1; i < seatStates[0].length; i++) {
    rightSeats.push([rowIndex, i]);
  }

  const topSeats: SeatIndex[] = [];
  for (let i = rowIndex - 1; i >= 0; i--) {
    topSeats.push([i, colIndex]);
  }

  const bottomSeats: SeatIndex[] = [];
  for (let i = rowIndex + 1; i < seatStates.length; i++) {
    bottomSeats.push([i, colIndex]);
  }

  const topLeftSeats: SeatIndex[] = [];
  for (let i = rowIndex - 1, j = colIndex - 1; i >= 0 && j >= 0; i--, j--) {
    topLeftSeats.push([i, j]);
  }

  const topRightSeats: SeatIndex[] = [];
  for (
    let i = rowIndex - 1, j = colIndex + 1;
    i >= 0 && j < seatStates[0].length;
    i--, j++
  ) {
    topRightSeats.push([i, j]);
  }

  const bottomLeftSeats: SeatIndex[] = [];
  for (
    let i = rowIndex + 1, j = colIndex - 1;
    i < seatStates.length && j >= 0;
    i++, j--
  ) {
    bottomLeftSeats.push([i, j]);
  }

  const bottomRightSeats: SeatIndex[] = [];
  for (
    let i = rowIndex + 1, j = colIndex + 1;
    i < seatStates.length && j < seatStates[0].length;
    i++, j++
  ) {
    bottomRightSeats.push([i, j]);
  }

  const visibleSeatsInEachDirection: SeatIndex[][] = [
    topSeats,
    bottomSeats,
    leftSeats,
    rightSeats,
    topLeftSeats,
    bottomLeftSeats,
    topRightSeats,
    bottomRightSeats,
  ];

  let visibleOccupiedSeatsInEachDirection = 0;
  visibleSeatsInEachDirection.forEach((visibleSeatsInOneDirection) => {
    const occupiedVisibleSeatInOneDirection = visibleSeatsInOneDirection.find(
      (visibleSeatInOneDirection) =>
        seatStates[visibleSeatInOneDirection[0]][
          visibleSeatInOneDirection[1]
        ] === SeatState.Occupied
    );

    let foundVisibleOccupiedSeat = false;
    for (let i = 0; i < visibleSeatsInOneDirection.length; i++) {
      const visibleSeatInOneDirection = visibleSeatsInOneDirection[i];
      const currentSeat =
        seatStates[visibleSeatInOneDirection[0]][visibleSeatInOneDirection[1]];
      if (currentSeat === SeatState.Empty) {
        // Found visible empty seat, stop searching
        break;
      }
      if (currentSeat === SeatState.Occupied) {
        // Found visible occupied seat
        foundVisibleOccupiedSeat = true;
      }
    }

    if (foundVisibleOccupiedSeat) {
      if (rowIndex === 0 && colIndex === 3) {
        console.log(
          "found a visible seat at",
          occupiedVisibleSeatInOneDirection
        );
      }
      visibleOccupiedSeatsInEachDirection++;
    }
  });

  return visibleOccupiedSeatsInEachDirection;
};
