export const getTreeCount = (options: {
  gridMap: string[][];
  xIncrement: number;
  yIncrement: number;
}) => {
  const { gridMap, xIncrement, yIncrement } = options;

  const gridsPerRow = gridMap[0].length;
  let x = 0;
  let y = 0;
  let treeCount = 0;

  gridMap.forEach((row) => {
    x = x + xIncrement;
    y = y + yIncrement;

    // Trees repeat, reset so we start from beginning of row
    x = x > gridsPerRow - 1 ? x - gridsPerRow : x;

    if (gridMap[y] && gridMap[y][x] === "#") {
      treeCount++;
    }
  });

  return treeCount;
};
