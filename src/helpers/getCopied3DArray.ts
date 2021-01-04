export const getCopied3DArray = <T>(state: T[][][]) =>
  state.map((_z, zIndex) =>
    state[zIndex].map((_y, yIndex) =>
      state[zIndex][yIndex].map((x, _xIndex) => x)
    )
  );
