import { Mask, Memory } from "../Day14.types";

export const isMask = (instruction: Mask | Memory): instruction is Mask =>
  (instruction as Mask).bitMask !== undefined;
