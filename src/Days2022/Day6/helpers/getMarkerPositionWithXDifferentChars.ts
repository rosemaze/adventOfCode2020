export const getMarkerPositionWithXDifferentChars = ({
  signal,
  numberOfDifferentChars,
}: {
  signal: string[];
  numberOfDifferentChars: number;
}) => {
  let processedSignal = [...signal];
  let marker = 0;

  for (let i = 0; i < signal.length && marker === 0; i++) {
    let hasRepeatedChar = false;

    // For numberOfDifferentChars block of characters, compare each character with every other character
    for (let j = 0; j < numberOfDifferentChars && !hasRepeatedChar; j++) {
      const currentChar = processedSignal[j];
      const otherChars = [
        ...processedSignal.slice(0, j),
        ...processedSignal.slice(j + 1, numberOfDifferentChars),
      ];

      if (otherChars.includes(currentChar)) {
        hasRepeatedChar = true;
        processedSignal.shift();
      }

      if (j === numberOfDifferentChars - 1) {
        marker = i + numberOfDifferentChars;
      }
    }
  }

  return marker;
};
