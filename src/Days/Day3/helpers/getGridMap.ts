export const getGridMap = (data: string) =>
  data.split("\n").map((row) => row.split("").map((gridUnit) => gridUnit));
