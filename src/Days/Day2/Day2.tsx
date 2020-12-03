import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../styles/DayHeader.style";
import {
  getPolicyAndPasswords,
  PolicyAndPasswords,
} from "./helpers/getPolicyAndPasswords";

export const Day2 = () => {
  const [policyAndPasswords, setPolicyAndPasswords] = React.useState<
    PolicyAndPasswords[]
  >();
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const { data } = useReadData("data/Day2/puzzleInput1.txt");

  React.useEffect(() => {
    setPolicyAndPasswords(getPolicyAndPasswords(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (!policyAndPasswords) {
      return;
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

    setResult1(`The number of valid passwords: ${validPasswords.length}`);
  }, [policyAndPasswords]);

  const getResult2 = React.useCallback(() => {
    if (!policyAndPasswords) {
      return;
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

    setResult2(`The number of valid passwords: ${validPasswords.length}`);
  }, [policyAndPasswords]);

  return (
    <>
      <DayHeader>Day 2</DayHeader>
      <input type="button" value="Get result 1" onClick={getResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={getResult2} />
      <div>{result2}</div>
    </>
  );
};
