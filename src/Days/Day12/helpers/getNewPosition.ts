import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Instruction, Action } from "../Day12.types";

export const getNewPosition = ({
  instruction,
  x,
  y,
}: {
  instruction: Instruction;
  x: number;
  y: number;
}) => {
  let newX = x;
  let newY = y;

  switch (instruction.action) {
    case Action.MoveNorth:
      newY = newY - instruction.steps;
      break;

    case Action.MoveSouth:
      newY = newY + instruction.steps;
      break;

    case Action.MoveEast:
      newX = newX + instruction.steps;
      break;

    case Action.MoveWest:
      newX = newX - instruction.steps;
      break;

    case Action.RotateLeft:
    case Action.RotateRight:
    case Action.Forward:
      break;

    default:
      throwUnreachableCase(instruction.action);
  }

  return { x: newX, y: newY };
};
