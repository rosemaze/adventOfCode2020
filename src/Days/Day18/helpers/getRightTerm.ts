import { getExpressionInParentheses } from "./getExpressionInParentheses";

// TODO: Convert to regex

export const getRightTerm = ({
  expression,
  operatorIndex,
}: {
  expression: string;
  operatorIndex: number;
}) => {
  const expressionToRightOfOperator = expression.slice(operatorIndex);
  let term = "";
  let charLength = 0;
  while (charLength < expressionToRightOfOperator.length && !term) {
    charLength++;
    const currentChar = expressionToRightOfOperator.slice(charLength).charAt(0);

    if (!isNaN(parseInt(currentChar))) {
      term = currentChar;
    }

    if (currentChar === "(") {
      const { expression: foundTerm } = getExpressionInParentheses(
        expressionToRightOfOperator.slice(charLength)
      );
      term = "(" + foundTerm + ")";
    }
  }

  return term;
};
