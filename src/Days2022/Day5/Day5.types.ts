export interface Instruction {
  numberOfCrates: number;
  from: number;
  to: number;
}

export interface InstructionsAndStacks {
  instructions: Instruction[];
  stacks: string[][];
}
