import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getExpressionWithPlusPrecedence } from "./helpers/getExpressionWithPlusPrecedence";
import { getMathQuestions } from "./helpers/getMathQuestions";
import { getMathResult } from "./helpers/getMathResult";

export const Day18 = () => {
  const getResult1 = (mathQuestions: string[]) => {
    const sumOfMathResults = mathQuestions
      .map((mathQuestion) =>
        getMathResult({ partialExpression: mathQuestion, partialResult: 0 })
      )
      .reduce((acc, result) => acc + result);

    return `Sum of results: ${sumOfMathResults}`;
  };

  const getResult2 = (mathQuestions: string[]) => {
    const sumOfAdvancedMathResults = mathQuestions
      .map((mathQuestion) => {
        const mathQuestionWithPlusPrecedence = getExpressionWithPlusPrecedence(
          mathQuestion
        );
        return getMathResult({
          partialExpression: mathQuestionWithPlusPrecedence,
          partialResult: 0,
        });
      })
      .reduce((acc, result) => acc + result);

    return `Sum of results for ad math: ${sumOfAdvancedMathResults}`;
  };

  return (
    <GenericDay
      dayNumber={18}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getMathQuestions}
      filePath="data/Day18/puzzleInput.txt"
    />
  );
};
