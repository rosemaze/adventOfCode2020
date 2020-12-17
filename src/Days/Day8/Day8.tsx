import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Instruction, Operation } from "./Day8.types";
import { getAccumulatorBeforeFirstRepeatedOperation } from "./helpers/getAccumulatorBeforeFirstRepeatedOperation";
import { getOperations } from "./helpers/getOperations";
import { getPerformedOpToSwitch } from "./helpers/getPerformedOpToSwitch";

export const Day8 = () => {
  const getResult1 = (operations: Operation[]) => {
    return `Value of accumulator before program repeats itself: ${
      getAccumulatorBeforeFirstRepeatedOperation(operations).accumulator
    }`;
  };

  const getResult2 = (operations: Operation[]) => {
    /*   search within performedOperations for

    if nop 
      (so we can switch to jump) && ownIndex + steps >= 623 && <= 625
    
    if jmp
      (so we can switch to nop and proceed) next operation is jmp && ownIndex + steps >= 623 && <= 625
*/

    const { operationsMarked } = getAccumulatorBeforeFirstRepeatedOperation(
      operations
    );
    console.log({ operationsMarked });

    const lastOp: Operation = {
      instruction: Instruction.Jump,
      steps: 1,
      index: 627,
    };

    const opToSwitch = getPerformedOpToSwitch({
      ops: operationsMarked,
      currentOp: lastOp,
    });

    if (!opToSwitch) {
      return "Could not find operation to fix";
    }

    // Fix operations
    const fixedOperations = [...operations];
    fixedOperations[opToSwitch.index] = {
      ...opToSwitch,
      instruction:
        opToSwitch.instruction === Instruction.Jump
          ? Instruction.Nop
          : Instruction.Jump,
    };

    return `Value of accumulator at the termination of fixed program: ${
      getAccumulatorBeforeFirstRepeatedOperation(fixedOperations).accumulator
    } `;
  };

  return (
    <GenericDay
      dayNumber={8}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getOperations}
      filePath="data/Day8/puzzleInput1.txt"
    />
  );
};
