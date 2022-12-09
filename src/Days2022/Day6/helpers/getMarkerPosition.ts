export const getMarkerPosition = (signal: string[]) => {
  let marker = 0;

  for (let i = 0; i < signal.length && marker === 0; i++) {
    const char1 = signal[i];
    const char2 = signal[i + 1];
    const char3 = signal[i + 2];
    const char4 = signal[i + 3];

    if (
      char1 !== char2 &&
      char1 !== char3 &&
      char1 !== char4 &&
      char2 !== char3 &&
      char2 !== char4 &&
      char3 !== char4
    ) {
      marker = i + 4;
    }
  }

  return marker;
};
