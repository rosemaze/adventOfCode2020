export const isValidExpirationYear = (input: string) => {
  const year = parseInt(input);

  return !isNaN(year) && year >= 2020 && year <= 2030;
};
