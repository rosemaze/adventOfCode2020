export const getNumberUnsummedByPreamble = ({
  numbers,
  preambleLength,
}: {
  numbers: number[];
  preambleLength: number;
}) => {
  const numbersAfterPreamble = numbers.slice(preambleLength);

  return numbersAfterPreamble.find((currentNumber, index) => {
    const preamble = numbers.slice(index, index + (preambleLength + 1));
    console.log({ preamble });
    const currentNumberMatch = preamble.find((prevNumber) => {
      const remainder = currentNumber - prevNumber;
      const match = preamble.find(
        (potentialMatch) => potentialMatch === remainder
      );
      return !!match;
    });

    return !currentNumberMatch;
  });
};
