export const getCopied2DArray = <T>(arr: T[][]) =>
  arr.map((_y, yIndex) => arr[yIndex].map((x, _xIndex) => x));
