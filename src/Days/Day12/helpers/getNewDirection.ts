import { Direction, Instruction, Action } from "../Day12.types";

export const getNewDirection = ({
  instruction,
  direction,
}: {
  direction: Direction;
  instruction: Instruction;
}) => {
  const directions =
    instruction.action === Action.RotateRight
      ? [Direction.North, Direction.East, Direction.South, Direction.West]
      : [Direction.North, Direction.West, Direction.South, Direction.East];

  const currentDirectionIndex = directions.indexOf(direction);
  const addIndexes = instruction.steps / 90;
  const newDirectionIndex = (currentDirectionIndex + addIndexes) % 4;
  return directions[newDirectionIndex];
};
