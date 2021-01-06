import { Operator } from "../Day18.types";
import { getEvaluatedExpression } from "./getEvaluatedExpression";
import { getExpressionInParentheses } from "./getExpressionInParentheses";

export const getMathResult = ({
  partialExpression,
  partialResult,
  lastOperator,
}: {
  partialExpression: string;
  partialResult: number;
  lastOperator?: Operator;
}): number => {
  const currentChar = partialExpression.charAt(0);

  if (partialExpression === "") {
    return partialResult;
  }

  if (currentChar === " ") {
    return getMathResult({
      partialExpression: partialExpression.slice(1),
      partialResult,
      lastOperator,
    });
  }

  // first number in an expression
  if (!isNaN(parseInt(currentChar)) && !lastOperator) {
    return getMathResult({
      partialExpression: partialExpression.slice(1),
      partialResult: parseInt(currentChar),
    });
  }

  // second number in an expression
  if (!isNaN(parseInt(currentChar)) && lastOperator) {
    return getMathResult({
      partialExpression: partialExpression.slice(1),
      partialResult: getEvaluatedExpression({
        a: partialResult,
        b: parseInt(currentChar),
        operator: lastOperator,
      }),
    });
  }

  // Start of a parenthesised expression
  if (currentChar === "(") {
    const { expression, remainingExpression } = getExpressionInParentheses(
      partialExpression
    );

    const resultInParentheses = getMathResult({
      partialExpression: expression,
      partialResult: 0,
    });

    // No last operator
    if (!lastOperator) {
      return getMathResult({
        partialExpression: remainingExpression,
        partialResult: resultInParentheses,
      });
    }

    // With last operator
    return getMathResult({
      partialExpression: remainingExpression,
      partialResult: getEvaluatedExpression({
        a: partialResult,
        b: resultInParentheses,
        operator: lastOperator,
      }),
    });
  }

  // Operator
  if (
    [Operator.Divide, Operator.Minus, Operator.Plus, Operator.Times].includes(
      currentChar as Operator
    )
  ) {
    return getMathResult({
      partialExpression: partialExpression.slice(1),
      partialResult,
      lastOperator: currentChar as Operator,
    });
  }

  return 0;
};
