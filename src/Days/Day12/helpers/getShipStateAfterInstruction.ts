import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Instruction, Action, Ship } from "../Day12.types";
import { getNewPosition } from "./getNewPosition";
import { mapDirectionToAction } from "./mapDirectionToAction";
import { getNewDirection } from "./getNewDirection";

export const getShipStateAfterInstruction = (
  ship: Ship,
  instruction: Instruction
) => {
  const { x, y, direction } = ship;
  switch (instruction.action) {
    case Action.MoveNorth:
    case Action.MoveSouth:
    case Action.MoveEast:
    case Action.MoveWest:
      return {
        ...ship,
        ...getNewPosition({ instruction, x, y }),
      };
    case Action.Forward:
      return {
        ...ship,
        ...getNewPosition({
          instruction: {
            action: mapDirectionToAction(direction),
            steps: instruction.steps,
          },
          x,
          y,
        }),
      };
    case Action.RotateLeft:
    case Action.RotateRight:
      return {
        ...ship,
        direction: getNewDirection({
          direction: ship.direction,
          instruction,
        }),
      };
    default:
      console.log({ action: instruction.action });
      throwUnreachableCase(instruction.action);
  }

  // should never get here but need it for unreachablecase
  return ship;
};
