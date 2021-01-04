import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getGameNumbers } from "./helpers/getGameNumbers";
import { getSpokenNumberOnTurn } from "./helpers/getSpokenNumberOnTurn";

export const Day15 = () => {
  const getResult1 = (gameNumbers: number[]) => {
    return `Number spoken on turn 2020: ${getSpokenNumberOnTurn({
      nthTurn: 2020,
      gameNumbers,
    })}`;
  };

  const getResult2 = (gameNumbers: number[]) => {
    return `Number spoken on turn 30000000: ${getSpokenNumberOnTurn({
      nthTurn: 30000000,
      gameNumbers,
    })}`;
  };

  return (
    <GenericDay
      dayNumber={15}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getGameNumbers}
      filePath=""
    />
  );
};
