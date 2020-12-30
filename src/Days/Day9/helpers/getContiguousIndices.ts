export const getContiguousIndices = ({
  numbers,
  invalidSum,
}: {
  numbers: number[];
  invalidSum: number;
}) => {
  let nextIndex = 0;
  let contiguousLength = 0;
  let foundContiguousSum = false;
  while (!foundContiguousSum && nextIndex < numbers.length - 1) {
    numbers
      .slice(nextIndex) // create copy of "array" for iterating
      .reduce((acc, curr, i, arr) => {
        if (acc >= invalidSum) {
          // Next number will exceed invalidsum
          if (acc === invalidSum) {
            foundContiguousSum = true;
            contiguousLength = i;
            console.log(
              "found contiguous set at index",
              nextIndex,
              " for the next numbers from index",
              (contiguousLength = i)
            );
          }

          arr.splice(1);
        } // eject early by mutating iterated copy

        const nextAcc = acc + curr;
        console.log({ nextAcc });
        return nextAcc;
      }, 0);

    nextIndex += 1;
  }

  return { startIndex: nextIndex - 1, endIndex: nextIndex + contiguousLength };
};
