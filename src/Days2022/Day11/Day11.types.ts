export interface MonkeyAction extends TestProps {
  id: number;
  itemsToInspect?: number[];
  test?: (props: {
    item: number;
    reduceWorryLevel?: boolean;
    allDivisors?: number;
  }) => resultMonkeyAndReceivedItem;
}

export interface TestProps {
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
