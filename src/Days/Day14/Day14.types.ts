export type ProgramInstruction = Mask | Memory;

export interface Mask {
  bitMask: string;
}

export interface Memory {
  location: number;
  value: number;
}

export type BitMaskValue = "X" | "0" | "1";
