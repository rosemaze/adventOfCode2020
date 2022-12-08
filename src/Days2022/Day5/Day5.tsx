import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getCopied2DArray } from "../../helpers/getCopied2DArray";
import { getData } from "../../helpers/getData";
import { InstructionsAndStacks } from "./Day5.types";
import { getInstructionsAndStacks } from "./helpers/getInstructionsAndStacks";
import { getStacksAfterAppliedInstructions } from "./helpers/getStacksAfterAppliedInstructions";

export const Day5 = () => {
  const getResult1 = ({ stacks, instructions }: InstructionsAndStacks) => {
    const stacksAfterAppliedInstructions = getStacksAfterAppliedInstructions({
      instructionsAndStacks: { stacks: getCopied2DArray(stacks), instructions }, // deep copy the array so we don't mutate the original array for the next part of the problem
      moveAllCratesAtOnce: false,
    });

    stacksAfterAppliedInstructions.splice(0, 1);

    return `Crates on top are ${stacksAfterAppliedInstructions.reduce(
      (acc, currentValue) => acc + currentValue[currentValue.length - 1],
      ""
    )}`;
  };

  const getResult2 = ({ stacks, instructions }: InstructionsAndStacks) => {
    const stacksAfterAppliedInstructions = getStacksAfterAppliedInstructions({
      instructionsAndStacks: { stacks: getCopied2DArray(stacks), instructions },
      moveAllCratesAtOnce: true,
    });

    stacksAfterAppliedInstructions.splice(0, 1);

    return `Crates on top are ${stacksAfterAppliedInstructions.reduce(
      (acc, currentValue) => acc + currentValue[currentValue.length - 1],
      ""
    )}`;
  };

  return (
    <GenericDay
      dayNumber={5}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getInstructionsAndStacks}
      filePath={"data/2022/Day5/puzzleInput.txt"}
    />
  );
};
