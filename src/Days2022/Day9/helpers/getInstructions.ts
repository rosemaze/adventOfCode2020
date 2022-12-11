import { Direction, Instruction } from "../Day9.types";

export const getInstructions = (data: string): Instruction[] =>
  data.split("\n").map((line) => ({
    direction: line.split(" ")[0] as Direction,
    steps: parseInt(line.split(" ")[1]),
  }));
