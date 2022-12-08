import { InstructionsAndStacks } from "../Day5.types";

export const getStacksAfterAppliedInstructions = ({
  instructionsAndStacks,
  moveAllCratesAtOnce,
}: {
  instructionsAndStacks: InstructionsAndStacks;
  moveAllCratesAtOnce: boolean;
}) => {
  const { stacks, instructions } = instructionsAndStacks;

  let stacksAfterAppliedInstructions: string[][] = [...stacks]; // TODO: we need to deep copy this so using the array twice is not messing it up
  instructions.forEach((instruction) => {
    const { numberOfCrates, from, to } = instruction;

    const cratesToMove = stacksAfterAppliedInstructions[from].splice(
      -numberOfCrates
    );

    stacksAfterAppliedInstructions[to] = [
      ...stacksAfterAppliedInstructions[to],
      ...(moveAllCratesAtOnce ? cratesToMove : cratesToMove.reverse()),
    ];
  });

  return stacksAfterAppliedInstructions;
};
