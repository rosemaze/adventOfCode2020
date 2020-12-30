import React from "react";
import { getPolicyAndPasswords } from "./helpers/getPolicyAndPasswords";
import { PolicyAndPasswords } from "./Day2.types";
import { GenericDay } from "../../components/GenericDay/GenericDay";

export const Day2 = () => {
  const getResult1 = (policyAndPasswords: PolicyAndPasswords[]) => {
    const validPasswords = policyAndPasswords.filter((policyAndPassword) => {
      const {
        policy: { min, max, requiredCharacter },
        password,
      } = policyAndPassword;

      const occurrences = (
        password.match(new RegExp(requiredCharacter, "g")) || []
      ).length;

      return occurrences >= min && occurrences <= max;
    });

    return `The number of valid passwords: ${validPasswords.length}`;
  };

  const getResult2 = (policyAndPasswords: PolicyAndPasswords[]) => {
    const validPasswords = policyAndPasswords.filter((policyAndPassword) => {
      const {
        policy: { min: position1, max: position2, requiredCharacter },
        password,
      } = policyAndPassword;

      const position1HasChar =
        password.charAt(position1 - 1) === requiredCharacter;
      const position2HasChar =
        password.charAt(position2 - 1) === requiredCharacter;

      return (
        (position1HasChar && !position2HasChar) ||
        (!position1HasChar && position2HasChar)
      );
    });

    return `The number of valid passwords: ${validPasswords.length}`;
  };

  return (
    <>
      <GenericDay
        dayNumber={2}
        getResult1={getResult1}
        getResult2={getResult2}
        getProcessedData={getPolicyAndPasswords}
        filePath={"data/Day2/puzzleInput2.txt"}
      />
    </>
  );
};
