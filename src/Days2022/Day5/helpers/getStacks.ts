import { isLetter } from "./isLetter";

export const getStacks = (data: string) => {
  const diagram = data.split("\n").filter((line) => line.indexOf("move"));

  diagram.splice(-1); // hacky - can't get rid of last empty line

  const flippedDiagram: string[][] = [];

  diagram.forEach((line, lineIndex) =>
    line.split("").forEach((char, charIndex) => {
      if (!flippedDiagram[charIndex]) {
        flippedDiagram[charIndex] = [];
      }

      flippedDiagram[charIndex][line.length - 1 - lineIndex] = char;
    })
  );

  const stacks: string[][] = [];

  flippedDiagram
    .filter((columns) =>
      columns.find((column) =>
        ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(column)
      )
    )
    .forEach((row) => {
      const stackId = row.find((col) => !isNaN(parseInt(col)));

      let id = -1;
      // Make stacks
      if (stackId) {
        id = parseInt(stackId);
        stacks[id] = [];
      }

      // Few stacks
      if (id !== -1) {
        stacks[id] = row.filter((col) => isLetter(col));
      }
    });

  return stacks;
};
