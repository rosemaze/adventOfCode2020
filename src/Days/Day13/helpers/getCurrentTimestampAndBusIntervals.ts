import { Bus, CurrentTimestampAndBusIntervals } from "../Day13.types";

export const getCurrentTimestampAndBusIntervals = (
  data: string
): CurrentTimestampAndBusIntervals => {
  if (!data) {
    return { buses: [], currentTimestamp: 123 };
  }

  const lines = data.split("\n");
  const line2 = lines[1];
  const currentTimestamp = parseInt(lines[0]);

  let gap = 0;
  let buses: Bus[] = [];
  const busIntervalsWithXs = line2.split(",");
  for (let i = 0; i < busIntervalsWithXs.length; i++) {
    if (busIntervalsWithXs[i] === "x") {
      gap++;
      continue;
    }

    buses.push({ interval: parseInt(busIntervalsWithXs[i]), gap });
    gap = 1;
  }

  return {
    currentTimestamp,
    buses,
  };
};
