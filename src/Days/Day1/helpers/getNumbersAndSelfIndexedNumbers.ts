export const getNumbersAndSelfIndexedNumbers = (data: string) => {
  const numbers = new Array<number>();
  const numbersIndexedByItself = new Array<number>();
  let currentNumber = 0;

  data.split("\n").forEach((line) => {
    currentNumber = parseInt(line);

    if (!isNaN(currentNumber)) {
      numbers.push(currentNumber);
      numbersIndexedByItself[currentNumber] = currentNumber;
    }
  });

  return { numbersIndexedByItself, numbers };
};
