import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Direction, Instruction } from "./Day9.types";
import { getHeadPosition } from "./helpers/getHeadPosition";
import { getInstructions } from "./helpers/getInstructions";
import { getTailPosition } from "./helpers/getTailPosition";
import { getUniqueTailPositions } from "./helpers/getUniqueTailPositions";

export const Day9 = () => {
  const getResult1 = (instructions: Instruction[]) => {
    const STARTING_POINT = { row: 4, column: 0 };

    let head = STARTING_POINT;
    let tail = STARTING_POINT;

    let tailPositions: string[] = [];

    instructions.forEach((instruction) => {
      const { steps, direction } = instruction;

      for (let step = 0; step < steps; step++) {
        head = getHeadPosition(direction, head);

        tail = getTailPosition({ head, tail });

        tailPositions = getUniqueTailPositions({ tail, tailPositions });
      }
    });

    return `Number of positions tail has visited at least once is ${tailPositions.length} positions`;
  };

  const getResult2 = (instructions: Instruction[]) => {
    const STARTING_POINT = { row: 15, column: 11 };
    //const STARTING_POINT = { row: 4, column: 0 };

    let head = STARTING_POINT;
    let knotsArray = Array.from({ length: 9 }, () => STARTING_POINT);

    let tailPositions: string[] = [];

    instructions.forEach((instruction) => {
      const { steps, direction } = instruction;

      for (let step = 0; step < steps; step++) {
        head = getHeadPosition(direction, head);

        // Apply algorithm to each knot
        for (let i = 0; i < knotsArray.length; i++) {
          const newKnots = [...knotsArray];

          const newKnot = getTailPosition({
            head: i === 0 ? head : newKnots[i - 1],
            tail: newKnots[i],
          });

          newKnots[i] = newKnot;

          knotsArray = [...newKnots];

          if (i === 8) {
            // Record position of last knot
            tailPositions = getUniqueTailPositions({
              tail: newKnot,
              tailPositions,
            });
          }
        }
      }
    });

    return `Ǹumber of positions 10th knot (tail) has visited at least once is ${tailPositions.length} positions`;
  };

  return (
    <GenericDay
      dayNumber={9}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getInstructions}
      filePath={"data/2022/Day9/puzzleInput.txt"}
    />
  );
};
