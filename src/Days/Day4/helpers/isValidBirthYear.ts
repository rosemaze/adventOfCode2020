export const isValidBirthYear = (input: string) => {
  const year = parseInt(input);

  return !isNaN(year) && year >= 1920 && year <= 2002;
};
