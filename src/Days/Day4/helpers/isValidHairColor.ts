export const isValidHairColor = (input: string) =>
  /^(#)[a-z0-9]{6}$/.test(input);
