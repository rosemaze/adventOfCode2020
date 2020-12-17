export const getNumbers = (data: string) =>
  data.split("\n").map((line) => parseInt(line));
