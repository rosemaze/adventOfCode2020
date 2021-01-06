import { Operator } from "../Day18.types";
import { getLeftTerm } from "./getLeftTerm";

export const getPlusHasPrecedence = (expression: string) => {
  const failedAt = expression.split("").findIndex((char, index) => {
    if (char === Operator.Plus) {
      const leftTerm = getLeftTerm({ expression, operatorIndex: index });

      const indexBeforeLeftTerm = index - leftTerm.length - 1;
      const charBeforeLeftTerm = expression
        .slice(indexBeforeLeftTerm)
        .charAt(0);

      if (charBeforeLeftTerm !== "(") {
        return true;
      }
    }
    return false;
  });
  return { hasPlusPrecedence: failedAt < 0, failedAt };
};
