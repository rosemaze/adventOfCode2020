import { ProgramInstruction } from "../Day14.types";
import { getValueWithAppliedMask } from "./getValueWithAppliedMask";
import { isMask } from "./isMask";

export const getInitialisedProgram = (program: ProgramInstruction[]) => {
  let currentMask = "";
  let addresses: Map<number, number> = new Map();

  program.forEach((instruction) => {
    if (isMask(instruction)) {
      currentMask = instruction.bitMask;
      return;
    }

    addresses.set(
      instruction.location,
      getValueWithAppliedMask({ value: instruction.value, mask: currentMask })
    );
  });

  return addresses;
};
