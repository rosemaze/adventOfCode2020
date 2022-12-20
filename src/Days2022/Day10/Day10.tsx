import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Operation, OperationType } from "./Day10.types";
import { getCRTRow } from "./helpers/getCRTRow";
import { getOperations } from "./helpers/getOperations";

export const Day10 = () => {
  const getResult1 = (operations: Operation[]) => {
    const INTERESTING_CYCLES = [20, 60, 100, 140, 180, 220];

    let cycle = 1;
    let register = 1;
    let interestingSignals = new Map<number, number>();

    operations.forEach(({ type, value }) => {
      if (
        type === OperationType.ADDX &&
        INTERESTING_CYCLES.includes(cycle + 1)
      ) {
        interestingSignals.set(cycle + 1, register * (cycle + 1));
      }

      switch (type) {
        case OperationType.ADDX:
          register += value;
          cycle += 2;
          break;
        case OperationType.NOOP:
          cycle++;
          break;
      }

      if (
        INTERESTING_CYCLES.includes(cycle) &&
        !interestingSignals.get(cycle)
      ) {
        interestingSignals.set(cycle, register * cycle);
      }
    });

    return `Sum of interesting signals are ${Array.from(
      interestingSignals.values()
    ).reduce((acc, cur) => (acc += cur), 0)}`;
  };

  const getResult2 = (operations: Operation[]) => {
    let crtRows: { [key: string]: string[] } = {
      "40": [],
      "80": [],
      "120": [],
      "160": [],
      "200": [],
      "240": [],
    };

    let cycle = 1;
    let register = 1;

    operations.forEach(({ type, value }) => {
      switch (type) {
        case OperationType.ADDX:
          crtRows = getCRTRow({ crtRows, register, cycle });

          cycle++;

          crtRows = getCRTRow({ crtRows, register, cycle });

          cycle++;

          register += value;
          break;
        case OperationType.NOOP:
          crtRows = getCRTRow({ crtRows, register, cycle });

          cycle++;
          break;
      }
    });

    Object.entries(crtRows).forEach((crtRow) =>
      console.log(crtRow[1].join(""))
    );

    return "Print letters in console.";
  };

  return (
    <GenericDay
      dayNumber={10}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getOperations}
      filePath={"data/2022/Day10/puzzleInput.txt"}
    />
  );
};
