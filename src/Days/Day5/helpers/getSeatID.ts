export const getSeatID = (options: {
  row: number;
  column: number;
  columnSize: number;
}) => options.row * options.columnSize + options.column;
