export const addTreetoArray = ({
  array,
  tree,
  row,
  column,
}: {
  array: string[];
  tree: number;
  row: number;
  column: number;
}) => {
  //console.log(`tree at row ${row} column ${column} is visible from the top`);

  const visibleTree = `tree-${row}-${column}-${tree}`;

  if (!array.includes(visibleTree)) {
    array.push(visibleTree);
  }
};
