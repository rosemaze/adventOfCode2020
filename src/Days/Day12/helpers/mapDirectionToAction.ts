import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { Direction, Action } from "../Day12.types";

export const mapDirectionToAction = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Action.MoveNorth;
    case Direction.South:
      return Action.MoveSouth;
    case Direction.East:
      return Action.MoveEast;
    case Direction.West:
      return Action.MoveWest;
    default:
      throwUnreachableCase(direction);
  }

  return Action.MoveNorth;
};
