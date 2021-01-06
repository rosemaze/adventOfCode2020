// TODO: refactor with getExpressionInParentheses
export const getExpressionInParenthesesBackwards = (expression: string) => {
  let charLength = 0;
  let nestedClosingParentheses = 0;
  let foundOpeningParenthesesIndex = -1;

  while (charLength < expression.length && foundOpeningParenthesesIndex < 0) {
    charLength++;
    const char = expression.slice(-charLength).charAt(0);

    if (char === ")") {
      nestedClosingParentheses++;
      continue;
    }

    if (char === "(" && nestedClosingParentheses > 1) {
      nestedClosingParentheses--;
      continue;
    }

    if (char === "(" && nestedClosingParentheses === 1) {
      foundOpeningParenthesesIndex = charLength;
      continue;
    }
  }

  return expression.slice(-foundOpeningParenthesesIndex);
};
