export const getSeatID = (options: {
  row: number;
  column: number;
  columnSize: number;
}) => {
  const { row, column, columnSize } = options;
  return row * columnSize + column;
};
