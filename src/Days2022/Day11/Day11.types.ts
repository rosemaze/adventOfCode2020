export interface MonkeyAction extends MonkeyTestProps {
  id: number;
  itemsToInspect?: number[];
  test?: (props: {
    item: number;
    reduceWorryLevel?: boolean;
    allDivisors?: number;
  }) => resultMonkeyAndReceivedItem;
}

export interface MonkeyTestProps {
  operator?: Operator;
  element?: number;
  divider?: number;
  trueMonkey?: number;
  falseMonkey?: number;
}

export interface resultMonkeyAndReceivedItem {
  id: number;
  item: number;
}

export enum Operator {
  PLUS = "+",
  MULTIPLY = "*",
  POWER2 = "^",
}
