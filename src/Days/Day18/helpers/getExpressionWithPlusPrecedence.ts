import { getLeftTerm } from "./getLeftTerm";
import { getPlusHasPrecedence } from "./getPlusHasPrecedence";
import { getRightTerm } from "./getRightTerm";

export const getExpressionWithPlusPrecedence = (expression: string) => {
  let newExpression = expression;

  while (!getPlusHasPrecedence(newExpression).hasPlusPrecedence) {
    const { failedAt } = getPlusHasPrecedence(newExpression);

    const leftTerm = getLeftTerm({
      expression: newExpression,
      operatorIndex: failedAt,
    });
    const rightTerm = getRightTerm({
      expression: newExpression,
      operatorIndex: failedAt,
    });

    const indexBeforeLeftTerm = failedAt - leftTerm.length;
    const remainingLeftExpression = newExpression.slice(0, indexBeforeLeftTerm);

    const remainingRightExpression = newExpression.slice(
      newExpression.indexOf(rightTerm, failedAt) + rightTerm.length
    );

    newExpression =
      remainingLeftExpression +
      "(" +
      leftTerm +
      "+" +
      rightTerm +
      ")" +
      remainingRightExpression;
  }

  return newExpression;
};
