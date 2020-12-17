import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Instruction, Operation } from "../Day8.types";

export const getAccumulatorBeforeFirstRepeatedOperation = (
  operations: Operation[]
): { accumulator: number; operationsMarked: Operation[] } => {
  const indexOperationMap: Map<number, Operation> = new Map();

  let currentIndex = 0;
  let accumulator = 0;
  let operationsMarked = [...operations];
  let order = 0;

  let isEndOfProgram = currentIndex > operations.length - 1;
  let isOperationPerformed = indexOperationMap.get(currentIndex);

  // Run program as long as we haven't performed current operation or terminated
  while (!isOperationPerformed && !isEndOfProgram) {
    order++;
    const operation = operations[currentIndex];
    const { instruction, steps } = operation;

    // Log the order each operation was performed in
    operationsMarked[currentIndex] = {
      ...operation,
      performedInOrder: order,
    };

    // Map each performed operation by index
    indexOperationMap.set(currentIndex, operation);

    // Perform
    switch (instruction) {
      case Instruction.Acc:
        accumulator += steps;
        currentIndex += 1;
        break;
      case Instruction.Jump:
        currentIndex += steps;
        break;
      case Instruction.Nop:
        currentIndex += 1;
        break;
      default:
        throwUnreachableCase(instruction);
    }

    isEndOfProgram = currentIndex > operations.length - 1;
    isOperationPerformed = indexOperationMap.get(currentIndex);
  }

  return { accumulator, operationsMarked };
};
