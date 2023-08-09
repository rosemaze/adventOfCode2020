import { MonkeyTestProps, Operator } from "../Day11.types";

export const getReceivingMonkeyAndItem =
  ({
    operator,
    element,
    divider = 1,
    trueMonkey = -1,
    falseMonkey = -1,
  }: MonkeyTestProps) =>
  ({
    item,
    reduceWorryLevel = true,
    allDivisors = 1,
  }: {
    item: number;
    reduceWorryLevel?: boolean;
    allDivisors?: number;
  }) => {
    let newItem = 0;

    // Worry item operated on
    switch (operator) {
      case Operator.MULTIPLY:
        let multiplier = element ? element : 0;
        newItem = item * (!isNaN(multiplier) ? multiplier : item);
        break;
      case Operator.PLUS:
        newItem = item + (element ?? 0);
        break;
      case Operator.POWER2:
        newItem = item * item;
        break;
    }

    // Worry level divided by 3
    if (reduceWorryLevel) {
      newItem = Math.floor(newItem / 3);
    } else {
      newItem = newItem % allDivisors;
    }

    // Return item and which monkey to receive it
    return {
      id: newItem % divider === 0 ? trueMonkey : falseMonkey,
      item: newItem,
    };
  };
