export interface Operation {
  index: number;
  instruction: Instruction;
  steps: number;
  performedInOrder?: number;
}

export enum Instruction {
  Jump = "jmp",
  Acc = "acc",
  Nop = "nop",
}
