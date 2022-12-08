export const getItems = (data: string) =>
  data.split("\n").map((line) => line.split("").map((item) => item));
