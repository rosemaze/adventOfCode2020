import React from "react";
import { DayHeader } from "./styles/DayHeader.style";

interface Props {
  dayNumber: number;
  getResult1: () => string;
  getResult2: () => string;
}

export const Day: React.FC<Props> = (props) => {
  const { getResult1, getResult2, dayNumber } = props;
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const handleGetResult1 = React.useCallback(() => {
    setResult1(getResult1());
  }, [getResult1]);

  const handleGetResult2 = React.useCallback(() => {
    setResult2(getResult2());
  }, [getResult2]);

  return (
    <>
      <DayHeader>Day {dayNumber}</DayHeader>
      <input type="button" value="Get result 1" onClick={handleGetResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={handleGetResult2} />
      <div>{result2}</div>
    </>
  );
};
