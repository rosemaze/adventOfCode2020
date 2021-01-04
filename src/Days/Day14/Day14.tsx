import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { ProgramInstruction } from "./Day14.types";
import { getAllPossibleBinaryLocations } from "./helpers/getAllPossibleBinaryLocations";
import { getInitialisedProgram } from "./helpers/getInitialisedProgram";
import { getInitialisedProgramV2 } from "./helpers/getInitialisedProgramV2";
import { getProgram } from "./helpers/getProgram";

export const Day14 = () => {
  const getResult1 = (program: ProgramInstruction[]) => {
    const addresses = getInitialisedProgram(program);

    let sumOfMemoryValues = 0;
    addresses.forEach((value) => {
      sumOfMemoryValues += value;
    });

    return `Sum of all values in memory: ${sumOfMemoryValues}`;
  };

  const getResult2 = (program: ProgramInstruction[]) => {
    const addresses = getInitialisedProgramV2(program);

    let sumOfMemoryValues = 0;
    addresses.forEach((value, key) => {
      sumOfMemoryValues += value;
    });

    return `Sum of all values in memory: ${sumOfMemoryValues}`;
  };

  return (
    <GenericDay
      dayNumber={14}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getProgram}
      filePath="data/Day14/puzzleInput.txt"
    />
  );
};
