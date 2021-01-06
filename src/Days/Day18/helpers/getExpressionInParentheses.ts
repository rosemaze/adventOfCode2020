export const getExpressionInParentheses = (expression: string) => {
  let nestedOpeningParentheses = 0;
  const indexOfClosingParentheses = expression.split("").findIndex((char) => {
    if (char === "(") {
      nestedOpeningParentheses++;
      return false;
    }

    if (char === ")" && nestedOpeningParentheses > 1) {
      nestedOpeningParentheses--;
      return false;
    }

    if (char === ")" && nestedOpeningParentheses === 1) {
      return true;
    }

    return false;
  });

  return {
    expression: expression.slice(1, indexOfClosingParentheses),
    remainingExpression: expression.slice(indexOfClosingParentheses + 1),
  };
};
