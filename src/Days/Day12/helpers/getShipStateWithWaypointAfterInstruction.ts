import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Instruction, Action, Ship, Waypoint, Direction } from "../Day12.types";
import { getNewDirection } from "./getNewDirection";
import { getNewPosition } from "./getNewPosition";
import { mapDirectionToAction } from "./mapDirectionToAction";

export const getShipStateWithWaypointAfterInstruction = ({
  ship,
  instruction,
}: {
  ship?: Ship;
  instruction: Instruction;
}) => {
  if (!ship) {
    return;
  }

  const { x, y, waypoint } = ship;

  if (!waypoint) {
    return;
  }

  switch (instruction.action) {
    case Action.MoveNorth:
    case Action.MoveSouth:
    case Action.MoveEast:
    case Action.MoveWest:
      return {
        ...ship,
        waypoint: getNewWaypoint({ instruction, waypoint }),
      };
    case Action.Forward:
      const newX = getNewPosition({
        instruction: {
          action: mapDirectionToAction(waypoint.x.direction),
          steps: instruction.steps * waypoint.x.steps,
        },
        x,
        y,
      });

      const newY = getNewPosition({
        instruction: {
          action: mapDirectionToAction(waypoint.y.direction),
          steps: instruction.steps * waypoint.y.steps,
        },
        x,
        y,
      });

      return {
        ...ship,
        x: newX.x,
        y: newY.y,
      };
    case Action.RotateLeft:
    case Action.RotateRight:
      return {
        ...ship,
        waypoint: getNewWaypoint({
          waypoint,
          instruction,
        }),
      };
    default:
      throwUnreachableCase(instruction.action);
  }

  // should never get here but need it for unreachablecase
  return ship;
};

const getNewWaypoint = ({
  waypoint,
  instruction,
}: {
  waypoint: Waypoint;
  instruction: Instruction;
}): Waypoint => {
  let x = {
    direction: waypoint.x.direction,
    steps: waypoint.x.steps,
  };
  let y = {
    direction: waypoint.y.direction,
    steps: waypoint.y.steps,
  };

  switch (instruction.action) {
    case Action.MoveNorth:
      y.steps = y.steps + instruction.steps;
      break;

    case Action.MoveSouth:
      y.steps = y.steps + instruction.steps;
      break;

    case Action.MoveEast:
      x.steps = x.steps + instruction.steps;
      break;

    case Action.MoveWest:
      x.steps = x.steps + instruction.steps;
      break;

    case Action.RotateLeft:
    case Action.RotateRight:
      let newXDirection = getNewDirection({
        direction: x.direction,
        instruction,
      });
      let newYDirection = getNewDirection({
        direction: y.direction,
        instruction,
      });

      x.direction = instruction.steps === 180 ? newXDirection : newYDirection;
      y.direction = instruction.steps === 180 ? newYDirection : newXDirection;

      x = {
        direction: newXDirection,
        steps: waypoint.x.steps,
      };
      y = {
        direction: newYDirection,
        steps: waypoint.y.steps,
      };
      // Flip x and y directions if we turned 90 or 270 degrees
      if (instruction.steps === 90) {
        x = {
          direction: newYDirection,
          steps: waypoint.y.steps,
        };
        y = {
          direction: newXDirection,
          steps: waypoint.x.steps,
        };
      }
      break;

    case Action.Forward:
      break;

    default:
      throwUnreachableCase(instruction.action);
  }

  return { x, y };
};
