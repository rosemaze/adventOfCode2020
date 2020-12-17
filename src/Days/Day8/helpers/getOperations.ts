import { Operation } from "../Day8.types";

export const getOperations = (data: string, index: number = 0) =>
  data.split("\n").map(
    (line) =>
      ({
        index: index++,
        instruction: line.split(" ")[0],
        steps: parseInt(line.split(" ")[1]),
      } as Operation)
  );
