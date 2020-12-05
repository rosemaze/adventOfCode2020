export const isValidBirthYear = (input: string) => {
  const year = parseInt(input);

  if (isNaN(year)) {
    return false;
  }

  return year >= 1920 && year <= 2002;
};

export const isValidIssueYear = (input: string) => {
  const year = parseInt(input);

  return !isNaN(year) && year >= 2010 && year <= 2020;
};
