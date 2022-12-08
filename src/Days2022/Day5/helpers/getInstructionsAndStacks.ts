import { getInstructions } from "./getInstructions";
import { getStacks } from "./getStacks";

export const getInstructionsAndStacks = (data: string) => ({
  instructions: getInstructions(data),
  stacks: getStacks(data),
});
