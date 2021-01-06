import { getExpressionInParenthesesBackwards } from "./getExpressionInParenthesesBackwards";

// TODO: Convert to regex, refactor with getRightTerm
export const getLeftTerm = ({
  expression,
  operatorIndex,
}: {
  expression: string;
  operatorIndex: number;
}) => {
  const expressionToLeftOfOperator = expression.slice(0, operatorIndex);
  const currentChar = expressionToLeftOfOperator.slice(-1).charAt(0);

  if (!isNaN(parseInt(currentChar))) {
    return currentChar;
  }

  if (currentChar === ")") {
    return getExpressionInParenthesesBackwards(expressionToLeftOfOperator);
  }

  return "";
};
