import { getSeatID } from "./getSeatID";
import { getBinarySearchedSpace } from "./getBinarySearchedSpace";

export const getSeatIDs = (boardingPasses: string[]) =>
  boardingPasses.map((boardingPass) => {
    const row = getBinarySearchedSpace({
      characters: boardingPass.slice(0, 7),
      space: 128,
      floor: 0,
      upperCharacter: "F",
      lowerCharacter: "B",
    });

    const column = getBinarySearchedSpace({
      characters: boardingPass.slice(-3),
      space: 8,
      floor: 0,
      upperCharacter: "L",
      lowerCharacter: "R",
    });

    return getSeatID({ row, column, columnSize: 8 });
  });
