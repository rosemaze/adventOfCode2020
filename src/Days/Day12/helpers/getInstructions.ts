import { Instruction } from "../../Day12/Day12.types";

export const getInstructions = (data: string) =>
  data.split("\n").map(
    (line) =>
      ({
        action: line.charAt(0),
        steps: parseInt(line.substr(1)),
      } as Instruction)
  );
