import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import {
  ChineseRemainderMember,
  CurrentTimestampAndBusIntervals,
} from "./Day13.types";
import { getCurrentTimestampAndBusIntervals } from "./helpers/getCurrentTimestampAndBusIntervals";
import { getEarliestBus } from "./helpers/getEarliestBus.";
import { getEquation } from "./helpers/getEquation";
import { getXWithChineseRemainderTheorem } from "./helpers/getXWithChineseRemainderTheorem";

export const Day13 = () => {
  const getResult1 = (
    currentTimestampAndBusIntervals: CurrentTimestampAndBusIntervals
  ) => {
    const earliestBus = getEarliestBus(currentTimestampAndBusIntervals);

    if (!earliestBus) {
      return "Error: No earliest bus found!";
    }

    return `Earliest bus comes in: ${
      earliestBus.interval * earliestBus.minutesToWait
    } minutes`;
  };

  const getResult2 = (
    currentTimestampAndBusIntervals: CurrentTimestampAndBusIntervals
  ) => {
    const { buses } = currentTimestampAndBusIntervals;

    /*
    // TOO SLOW
    const equations: Equation[] = [];
    buses.forEach((bus, index) => {
      if (index === buses.length - 1) {
        return;
      }

      const currentBus = bus;
      const nextBus = buses[index + 1];

      equations.push(
        getEquation({
          currentInterval: currentBus.interval,
          nextInterval: nextBus.interval,
          difference: nextBus.gap,
        })
      );
    });
    getEarliestBusWithSubsequentDepartures(equations)
    */

    const firstBus = buses[0];
    let accumulatedGap = 0;
    const chineseRemainderMembers: ChineseRemainderMember[] = buses
      .map((bus) => {
        accumulatedGap += bus.gap;
        return getEquation({
          currentInterval: firstBus.interval,
          nextInterval: bus.interval,
          difference: accumulatedGap,
        });
      })
      .map((equation) => ({
        coprime: equation.next.prime,
        remainder: equation.difference % equation.next.prime,
      }));

    const productOfAllCoPrimes = chineseRemainderMembers
      .map((member) => member.coprime)
      .reduce((product, coPrime) => product * coPrime, 1);

    const { coprime: sumOfAllProducts } = getXWithChineseRemainderTheorem(
      chineseRemainderMembers
    );

    return `The earliest timestamp with consecutive buses: ${Math.abs(
      sumOfAllProducts - productOfAllCoPrimes * 4
    )}`;
  };

  return (
    <GenericDay
      dayNumber={13}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getCurrentTimestampAndBusIntervals}
      filePath="data/Day13/puzzleInput.txt"
    />
  );
};
