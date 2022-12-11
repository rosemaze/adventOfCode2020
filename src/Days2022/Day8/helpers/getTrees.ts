export const getTrees = (data: string) => {
  const trees: number[][] = [];

  data.split("\n").forEach((line) => {
    trees.push(line.split("").map((char) => parseInt(char)));
  });

  return trees;
};
