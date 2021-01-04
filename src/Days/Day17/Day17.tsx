import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { CellState, Cube, HyperCube } from "./Day17.types";
import { getInitialState } from "./helpers/getInitialState";
import { getStateAfterTick } from "./helpers/getStateAfterTick";
import { getStateAfterTick4D } from "./helpers/getStateAfterTick4D";

export const Day17 = () => {
  const getResult1 = (initialState: Cube) => {
    let currentState = initialState;
    for (let i = 0; i < 6; i++) {
      const nextState = getStateAfterTick(currentState);
      currentState = nextState;
    }

    const activeCellsCount = currentState
      .flat()
      .flat()
      .filter((cellState) => cellState === CellState.Active).length;
    return `Sum of all active cells: ${activeCellsCount}`;
  };

  const getResult2 = (initialState: Cube) => {
    let currentState: HyperCube = [initialState];
    for (let i = 0; i < 6; i++) {
      const nextState = getStateAfterTick4D(currentState);
      currentState = nextState;
    }

    const activeCellsCount = currentState
      .flat()
      .flat()
      .flat()
      .filter((cellState) => cellState === CellState.Active).length;

    return `Sum of all active cells in 4D: ${activeCellsCount}`;
  };

  return (
    <GenericDay
      dayNumber={17}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getInitialState}
      filePath="data/Day17/puzzleInput.txt"
    />
  );
};
