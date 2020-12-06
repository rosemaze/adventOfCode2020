import { PairedSums } from "../Day1.types";

export const getPairedSums = (numbers: number[]): PairedSums => {
  const pairedSums = new Array<number>();
  const pairedSumsIndividuals = new Array<Array<number>>();

  numbers.forEach((num, index) => {
    if (index < numbers.length - 1) {
      const numbersToAdd = numbers.slice(index + 1);

      numbersToAdd.forEach((numToAdd) => {
        pairedSums.push(numToAdd + num);
        pairedSumsIndividuals[numToAdd + num] = [numToAdd, num];
      });
    }
  });

  return { pairedSums, pairedSumsIndividuals };
};
