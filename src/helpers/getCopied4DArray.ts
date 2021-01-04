export const getCopied4DArray = <T>(state: T[][][][]) =>
  state.map((_w, wIndex) =>
    state[wIndex].map((_z, zIndex) =>
      state[wIndex][zIndex].map((_y, yIndex) =>
        state[wIndex][zIndex][yIndex].map((x, _xIndex) => x)
      )
    )
  );
