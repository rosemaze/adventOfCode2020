import { ProgramInstruction, Mask, Memory } from "../Day14.types";

const regex = /mem\[(\d+)\]\s=\s(\d+)/i;

export const getProgram = (data: string): ProgramInstruction[] =>
  data.split("\n").map((line) => {
    if (line.startsWith("mask")) {
      const res = line.split(" = ")![1];
      return { bitMask: res } as Mask;
    }

    const res = regex.exec(line);
    const location = res ? parseInt(res[1]) : 0;
    const value = res ? parseInt(res[2]) : 0;

    return {
      location,
      value,
    } as Memory;
  });
