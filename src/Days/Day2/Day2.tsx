import React from "react";
import { useReadData } from "../../hooks/useReadData";
import {
  getPolicyAndPasswords,
  PolicyAndPasswords,
} from "./helpers/getPolicyAndPasswords";
import { Day } from "../../components/Day/Day";

export const Day2 = () => {
  const [policyAndPasswords, setPolicyAndPasswords] = React.useState<
    PolicyAndPasswords[]
  >();

  const { data } = useReadData("data/Day2/puzzleInput1.txt");

  React.useEffect(() => {
    setPolicyAndPasswords(getPolicyAndPasswords(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (!policyAndPasswords) {
      return "Error: no data";
    }

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
  }, [policyAndPasswords]);

  const getResult2 = React.useCallback(() => {
    if (!policyAndPasswords) {
      return "Error: no data!";
    }

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
  }, [policyAndPasswords]);

  return (
    <>
      <Day dayNumber={2} getResult1={getResult1} getResult2={getResult2} />
    </>
  );
};
