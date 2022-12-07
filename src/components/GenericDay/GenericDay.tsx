import React from "react";
import { DayHeader } from "./styles/DayHeader.style";
import { useReadData } from "../../hooks/useReadData";

interface Props<T> {
  dayNumber: number;
  getResult1: (processedData: T) => string;
  getResult2: (processedData: T) => string;
  getProcessedData: (data: string) => T;
  filePath: string;
}

// Caution: Pesky linter won't allow component to be defined as React.FC - VSCode won't detect if we don't return jsx
export function GenericDay<T>(props: Props<T>) {
  const { getResult1, getResult2, dayNumber, getProcessedData, filePath } =
    props;
  const [result1, setResult1] = React.useState("");
  const [result2, setResult2] = React.useState("");
  const [processedData, setProcessedData] = React.useState<T>();

  const { data } = useReadData(filePath);

  React.useEffect(() => {
    setProcessedData(getProcessedData(data));
  }, [data, getProcessedData]);

  const handleGetResult1 = React.useCallback(() => {
    if (!processedData) {
      setResult1("Error: No processed data");
      return;
    }

    setResult1(getResult1(processedData));
  }, [processedData, getResult1]);

  const handleGetResult2 = React.useCallback(() => {
    if (!processedData) {
      setResult2("Error: No processed data");
      return "Error: No processed data";
    }

    setResult2(getResult2(processedData));
  }, [processedData, getResult2]);

  return (
    <>
      <DayHeader>Day {dayNumber}</DayHeader>
      <input type="button" value="Get result 1" onClick={handleGetResult1} />
      <div>{result1}</div>
      <input type="button" value="Get result 2" onClick={handleGetResult2} />
      <div>{result2}</div>
    </>
  );
}
