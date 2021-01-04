import { Memory, ProgramInstruction } from "../Day14.types";
import { getAllPossibleBinaryLocations } from "./getAllPossibleBinaryLocations";
import { getLocationWithAppliedMask } from "./getLocationWithAppliedMask";
import { getValueWithAppliedMask } from "./getValueWithAppliedMask";
import { isMask } from "./isMask";

export const getInitialisedProgramV2 = (program: ProgramInstruction[]) => {
  let currentMask = "";
  let addresses: Map<number, number> = new Map();

  program.forEach((instruction) => {
    if (isMask(instruction)) {
      currentMask = instruction.bitMask;
      return;
    }

    const { location, value } = instruction;

    const floatingLocation = getLocationWithAppliedMask({
      location,
      mask: currentMask,
    });
    console.log({ floatingLocation });

    const allPossibleBinaryLocations = getAllPossibleBinaryLocations({
      floatingLocation,
      locations: [],
    });

    console.log({ allPossibleBinaryLocations });

    allPossibleBinaryLocations.forEach((binaryLocation) =>
      addresses.set(parseInt(binaryLocation, 2), value)
    );
  });

  return addresses;
};
