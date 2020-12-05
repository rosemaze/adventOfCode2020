export const throwUnreachableCase = (x: never) => {
  throw new Error("Didn't expect to get here");
};
