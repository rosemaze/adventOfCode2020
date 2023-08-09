import { MonkeyAction } from "../Day11.types";

export const getMonkeyResults = ({
  numberOfRounds,
  monkeyActions,
  reduceWorryLevel = true,
}: {
  numberOfRounds: number;
  monkeyActions: MonkeyAction[];
  reduceWorryLevel?: boolean;
}) => {
  const monkeyItems = monkeyActions.map(
    (monkeyAction) => monkeyAction.itemsToInspect!
  );
  const monkeyInspections: number[] = Array.from(
    { length: monkeyActions.length },
    () => 0
  );

  const allDivisors = reduceWorryLevel
    ? undefined
    : monkeyActions
        .map((monkeyAction) => monkeyAction.divider!)
        .reduce((acc, cur) => acc * cur, 1);

  for (let round = 0; round < numberOfRounds; round++) {
    monkeyActions.forEach((monkeyAction) => {
      const { id, test } = monkeyAction;

      if (!test) {
        return;
      }

      const itemsToInspect = monkeyItems[id];

      itemsToInspect?.forEach((itemToInspect) => {
        let { id: receivingMonkey, item: receivedItem } = test({
          item: itemToInspect,
          reduceWorryLevel,
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

  return {
    monkeyItems,
    monkeyInspections: monkeyInspections.sort((a, b) => b - a),
  };
};
