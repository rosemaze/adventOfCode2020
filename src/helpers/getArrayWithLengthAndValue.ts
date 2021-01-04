export const getArrayWithLengthAndValue = <T>({
  arrayLength,
  arrayValue,
}: {
  arrayLength: number;
  arrayValue: T;
}) => {
  const arr: T[] = [];
  while (arrayLength--) {
    arr.push(arrayValue);
  }
  return arr;
};
