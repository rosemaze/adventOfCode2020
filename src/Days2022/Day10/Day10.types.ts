export interface Operation {
  type: OperationType;
  value: number;
}

export enum OperationType {
  NOOP = "noop",
  ADDX = "addx",
}
