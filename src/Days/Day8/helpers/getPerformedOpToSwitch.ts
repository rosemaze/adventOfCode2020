import { Instruction, Operation } from "../Day8.types";
import { getPrecedingOps } from "./getPrecedingOp";

export const getPerformedOpToSwitch = (options: {
  ops: Operation[];
  currentOp: Operation;
}): Operation | null => {
  const { ops, currentOp } = options;

  // Check if any performed ops can lead to current operation if corrected
  let performedOpToSwitch: Operation | null = null;

  for (let i = 0; i < ops.length && performedOpToSwitch === null; i++) {
    const operation = ops[i];
    if (!operation.performedInOrder) {
      continue;
    }

    // Check if index-1 operation of is current operation is jump and has been performed
    const opListedBefore = ops[currentOp.index - 1];
    const foundPerformedOpToSwitchToNop =
      opListedBefore.performedInOrder &&
      opListedBefore.instruction === Instruction.Jump;

    if (foundPerformedOpToSwitchToNop) {
      console.log("found performed jump op to switch to nop", opListedBefore);
      performedOpToSwitch = opListedBefore;
    }

    const foundPerformedOpToSwitchToJump = ops.find((operation) => {
      return (
        operation.performedInOrder &&
        operation.instruction === Instruction.Nop &&
        operation.index + operation.steps === currentOp.index
      );
    });

    if (foundPerformedOpToSwitchToJump) {
      console.log(
        "found performed nop to switch to jump",
        foundPerformedOpToSwitchToJump
      );
      performedOpToSwitch = foundPerformedOpToSwitchToJump;
    }
  }

  // Found, return
  if (performedOpToSwitch) {
    console.log("found performed op to switch");
    return performedOpToSwitch;
  }

  // Get all possible ops that could lead to current operation
  const precedingOps = getPrecedingOps({ ops, currentOp });

  // If no operations lead up to current operation
  if (precedingOps.length === 0) {
    // terminate function and return null result
    return null;
  }

  // Find first path that leads to a performed operation that can be corrected

  let nextPerformedOpToSwitch = null;
  for (
    let i = 0;
    i < precedingOps.length && nextPerformedOpToSwitch === null;
    i++
  ) {
    nextPerformedOpToSwitch = getPerformedOpToSwitch({
      ops,
      currentOp: precedingOps[i],
    });
  }

  return nextPerformedOpToSwitch;

  /*
  const nextPerformedOpToSwitch = precedingOps.find(
    (precedingOp) =>
      getPerformedOpToSwitch({
        ops,
        currentOp: precedingOp,
      }) !== null
  );

  if (nextPerformedOpToSwitch) {
    return nextPerformedOpToSwitch;
  }

  return null;
  */
};
