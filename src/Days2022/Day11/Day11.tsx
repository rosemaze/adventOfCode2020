import { GenericDay } from "../../components/GenericDay/GenericDay";
import { MonkeyAction } from "./Day11.types";
import { getMonkeyActions } from "./helpers/getMonkeyActions";
import { getMonkeyResults } from "./helpers/getMonkeyResults";

export const Day11 = () => {
  const getResult1 = (monkeyActions: MonkeyAction[]) => {
    const { monkeyInspections } = getMonkeyResults({
      monkeyActions,
      numberOfRounds: 20,
    });

    // Get two monkeys with most items inspected
    monkeyInspections.sort((a, b) => b - a);

    return `The level of monkey business is: ${
      monkeyInspections[0] * monkeyInspections[1]
    }`;
  };

  const getResult2 = (monkeyActions: MonkeyAction[]) => {
    const allDivisors = monkeyActions
      .map((monkeyAction) => monkeyAction.divider!)
      .reduce((acc, cur) => acc * cur, 1);

    const monkeyItems = monkeyActions.map(
      (monkeyAction) => monkeyAction.itemsToInspect!
    );
    const monkeyInspections: number[] = Array.from(
      { length: monkeyActions.length },
      () => 0
    );

    for (let round = 0; round < 10000; round++) {
      monkeyActions.forEach((monkeyAction) => {
        const { id, test } = monkeyAction;

        if (!test) {
          return;
        }

        const itemsToInspect = monkeyItems[id];

        itemsToInspect?.forEach((itemToInspect) => {
          let { id: receivingMonkey, item: receivedItem } = test({
            item: itemToInspect,
            reduceWorryLevel: false,
            allDivisors,
          });

          // Give to monkey
          monkeyItems[receivingMonkey].push(receivedItem);

          // Remove from existing monkey list
          monkeyItems[id] = monkeyItems[id].filter(
            (item) => item !== itemToInspect
          );

          monkeyInspections[id] = monkeyInspections[id] + 1;
        });
      });
    }

    // Get two monkeys with most items inspected
    monkeyInspections.sort((a, b) => b - a);

    return `The level of monkey business is: ${
      monkeyInspections[0] * monkeyInspections[1]
    }`;
  };

  return (
    <GenericDay
      dayNumber={11}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getMonkeyActions}
      filePath={"data/2022/Day11/puzzleInput.txt"}
    />
  );
};
