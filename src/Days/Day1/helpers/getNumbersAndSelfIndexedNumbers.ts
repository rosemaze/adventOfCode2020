export interface NumbersAndSelfIndexed {
  numbersIndexedByItself: number[];
  numbers: number[];
}

export const getNumbersAndSelfIndexedNumbers = ({
  data,
  delimiter,
}: {
  data: string;
  delimiter: string;
}) => {
  const numbers = new Array<number>();
  const numbersIndexedByItself = new Array<number>();
  let currentNumber = 0;

  data.split(delimiter).forEach((line) => {
    currentNumber = parseInt(line);

    if (!isNaN(currentNumber)) {
      numbers.push(currentNumber);
      numbersIndexedByItself[currentNumber] = currentNumber;
    }
  });

  return { numbersIndexedByItself, numbers };
};
