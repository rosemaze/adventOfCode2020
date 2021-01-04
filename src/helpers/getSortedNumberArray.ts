export const getSortedNumberArray = ({
  numbers,
  asc,
}: {
  numbers: number[];
  asc: boolean;
}) => (asc ? numbers.sort((a, b) => a - b) : numbers.sort((a, b) => b - a));
