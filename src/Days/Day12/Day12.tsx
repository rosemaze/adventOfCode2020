import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getInstructions } from "./helpers/getInstructions";
import { Direction, Instruction, Ship } from "./Day12.types";
import { getShipStateAfterInstruction } from "./helpers/getShipStateAfterInstruction";
import { getShipStateWithWaypointAfterInstruction } from "./helpers/getShipStateWithWaypointAfterInstruction";

export const Day12 = () => {
  const getResult1 = (instructions: Instruction[]) => {
    let ship: Ship = {
      x: 0,
      y: 0,
      direction: Direction.East,
    };

    instructions.forEach((instruction) => {
      ship = getShipStateAfterInstruction(ship, instruction);
    });

    const manhattanDistance = Math.abs(ship.x) + Math.abs(ship.y);
    return `Ship's manhattan distance after instructions: ${manhattanDistance}`;
  };

  const getResult2 = (instructions: Instruction[]) => {
    let ship: Ship | undefined = {
      x: 0,
      y: 0,
      direction: Direction.East,
      waypoint: {
        x: {
          direction: Direction.East,
          steps: 10,
        },
        y: {
          direction: Direction.North,
          steps: 1,
        },
      },
    };

    instructions.forEach((instruction) => {
      ship = getShipStateWithWaypointAfterInstruction({ ship, instruction });
      console.log({ ship });
    });

    const manhattanDistance = Math.abs(ship.x) + Math.abs(ship.y);
    return `Ship's manhattan distance after instructions: ${manhattanDistance}`;
  };

  return (
    <GenericDay
      dayNumber={12}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getInstructions}
      filePath="data/Day12/puzzleInput.txt"
    />
  );
};
