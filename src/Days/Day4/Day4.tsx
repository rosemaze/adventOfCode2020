import React from "react";
import { useReadData } from "../../hooks/useReadData";
import { getPassports, Passport } from "./helpers/getPassports";
import { isValidPassport } from "./helpers/isValidPassport";
import { hasValidPassportFields } from "./helpers/hasValidPassportFields";
import { Day } from "../../components/Day/Day";

export const Day4 = () => {
  const [passports, setPassports] = React.useState<Passport[]>([]);

  const { data } = useReadData("data/Day4/puzzleInput1.txt");

  React.useEffect(() => {
    setPassports(getPassports(data));
  }, [data]);

  const getResult1 = React.useCallback(() => {
    if (passports.length === 0) {
      return "Error: no data";
    }

    const validPassports = passports.filter((passport) =>
      isValidPassport(passport)
    );

    return `The number of valid passports: ${validPassports.length}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passports.length, passports]);

  const getResult2 = React.useCallback(() => {
    if (passports.length === 0) {
      return "Error: no data";
    }

    const validPassports = passports.filter(
      (passport) =>
        isValidPassport(passport) && hasValidPassportFields(passport)
    );

    return `The number of valid passports: ${validPassports.length}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passports.length]);

  return <Day dayNumber={4} getResult1={getResult1} getResult2={getResult2} />;
};
