export const getJoltages = (data: string) =>
  data.split("\n").map((line) => parseInt(line));
