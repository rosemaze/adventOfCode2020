import { Bus } from "../Day13.types";
import { getNextTimestampForBus } from "./getNextTimestampForBus";

export const getEarliestBus = ({
  currentTimestamp,
  buses,
}: {
  currentTimestamp: number;
  buses: Bus[];
}) =>
  buses
    .map((bus) => ({
      interval: bus.interval,
      minutesToWait:
        getNextTimestampForBus({
          currentTimestamp,
          busInterval: bus.interval,
        }) - currentTimestamp,
    }))
    .sort((busA, busB) => busB.minutesToWait - busA.minutesToWait)
    .pop();
