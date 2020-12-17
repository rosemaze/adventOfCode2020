export const getUniqueItemsInArray = <T extends number | string>(
  items: T[]
) => {
  const arr: T[] = [];
  for (let i = 0; i < items.length; i++) {
    if (arr.indexOf(items[i]) === -1) {
      arr.push(items[i]);
    }
  }
  return arr;
};
