import React from "react";
import { getPassports } from "./helpers/getPassports";
import { isValidPassport } from "./helpers/isValidPassport";
import { hasValidPassportFields } from "./helpers/hasValidPassportFields";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Passport } from "./Day4.types";

export const Day4 = () => {
  const getResult1 = (passports: Passport[]) => {
    const validPassports = passports.filter((passport) =>
      isValidPassport(passport)
    );

    return `The number of valid passports: ${validPassports.length}`;
  };

  const getResult2 = (passports: Passport[]) => {
    const validPassports = passports.filter(
      (passport) =>
        isValidPassport(passport) && hasValidPassportFields(passport)
    );

    return `The number of valid passports: ${validPassports.length}`;
  };

  return (
    <GenericDay
      dayNumber={4}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getPassports}
      filePath="data/Day4/puzzleInput1.txt"
    />
  );
};
