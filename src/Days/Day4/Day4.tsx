import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { DayHeader } from "../../styles/DayHeader.style";
import { getPassports, Passport } from "./helpers/getPassports";
import { isValidPassport } from "./helpers/isValidPassport";
import { hasValidPassportFields } from "./helpers/hasValidPassportFields";

export const Day4 = () => {
  const [passports, setPassports] = React.useState<Passport[]>([]);
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const { data } = useReadData("data/Day4/puzzleInput1.txt");

  React.useEffect(() => {
    setPassports(getPassports(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (passports.length === 0) {
      return;
    }

    const validPassports = passports.filter((passport) =>
      isValidPassport(passport)
    );

    setResult1(`The number of valid passports: ${validPassports.length}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passports.length, passports]);

  // Hook: dependency can check array has changed or do we use array length?

  const getResult2 = React.useCallback(() => {
    if (passports.length === 0) {
      return;
    }

    const validPassports = passports.filter(
      (passport) =>
        isValidPassport(passport) && hasValidPassportFields(passport)
    );

    setResult2(`The number of valid passports: ${validPassports.length}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passports.length]);

  return (
    <>
      <DayHeader>Day 4</DayHeader>
      <input type="button" value="Get result 1" onClick={getResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={getResult2} />
      <div>{result2}</div>
    </>
  );
};
