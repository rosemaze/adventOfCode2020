import { Operation, OperationType } from "../Day10.types";

export const getOperations = (data: string): Operation[] =>
  data.split("\n").map((line) => ({
    type: line.split(" ")[0] as OperationType,
    value: parseInt(line.split(" ")[1] ?? 0),
  }));
