import { MonkeyAction, Operator } from "../Day11.types";
import { getReceivingMonkeyAndItem } from "./getReceivingMonkeyAndItem";

export const getMonkeyActions = (data: string) => {
  const monkeyActions: MonkeyAction[] = [];

  data.split("\n\n").forEach((paragraph) => {
    let id = -1;
    let operator = Operator.PLUS;
    let element = 0;
    let divider = 0;
    let trueMonkey = 0;
    let falseMonkey = 0;

    paragraph.split("\n").forEach((line) => {
      // Each monkey
      if (line.startsWith("Monkey")) {
        // New monkey
        id = parseInt(line.split(" ")[1]);

        monkeyActions[id] = { id };
      } else if (line.includes("Starting items:")) {
        // itemsToInspect
        const commaSeparatedItems = line.split("Starting items: ")[1];

        let itemsToInspect: number[] = commaSeparatedItems
          .split(", ")
          .map((eachItem) => parseInt(eachItem));

        monkeyActions[id] = { ...monkeyActions[id], itemsToInspect };
      } else if (line.includes("Operation:")) {
        // Operation to increase worry level
        operator = line.split(" ")[6] as Operator;

        element = parseInt(line.split(" ").pop() ?? "0");
        if (isNaN(element)) {
          operator = Operator.POWER2;
        }
      } else if (line.includes("Test:")) {
        // Test with divisible
        divider = parseInt(line.split("Test: divisible by ")[1]);
      } else if (line.includes("If true:")) {
        // Get true condition monkey
        trueMonkey = parseInt(line.split("If true: throw to monkey ")[1]);
      } else if (line.includes("If false:")) {
        // Get false condition monkey
        falseMonkey = parseInt(line.split("If false: throw to monkey ")[1]);
      }

      monkeyActions[id] = {
        ...monkeyActions[id],
        operator,
        element,
        divider,
        trueMonkey,
        falseMonkey,
        test: getReceivingMonkeyAndItem({
          operator,
          element,
          divider,
          trueMonkey,
          falseMonkey,
        }),
      };
    });
  });

  return monkeyActions;
};
