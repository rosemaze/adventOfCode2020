export const isValidHeight = (input: string) => {
  const lastTwoCharacters = input.slice(-2);
  const upToLastTwoCharacters = input.slice(-input.length, -2);
  const height = parseInt(upToLastTwoCharacters);

  if (lastTwoCharacters === "cm") {
    return !isNaN(height) && height >= 150 && height <= 193;
  }

  if (lastTwoCharacters === "in") {
    return !isNaN(height) && height >= 59 && height <= 76;
  }

  return false;
};
