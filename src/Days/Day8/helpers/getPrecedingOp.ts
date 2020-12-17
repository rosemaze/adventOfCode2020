import { Instruction, Operation } from "../Day8.types";

export const getPrecedingOps = ({
  ops,
  currentOp,
}: {
  ops: Operation[];
  currentOp: Operation;
}) => {
  // Find all jump ops that lead to current op
  const allJumpOps = ops.filter(
    (op) =>
      op.instruction === Instruction.Jump &&
      op.index + op.steps === currentOp.index
  );

  const opListedBeforeCurrentOp = ops[currentOp.index - 1];
  const hasPrecedingAccOrNoOp = [Instruction.Acc, Instruction.Nop].includes(
    opListedBeforeCurrentOp.instruction
  );

  // Return jump ops and any preceding op that is nop/acc
  if (hasPrecedingAccOrNoOp) {
    return [...allJumpOps, opListedBeforeCurrentOp];
  }

  return [...allJumpOps];
};
