import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Operator } from "../Day18.types";

export const getEvaluatedExpression = ({
  a,
  b,
  operator,
}: {
  a: number;
  b: number;
  operator: Operator;
}) => {
  switch (operator) {
    case Operator.Plus:
      return a + b;
    case Operator.Minus:
      return a - b;
    case Operator.Times:
      return a * b;
    case Operator.Divide:
      return a / b;
    default:
      throwUnreachableCase(operator);
  }
  return 0;
};
