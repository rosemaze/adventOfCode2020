import { PolicyAndPasswords } from "../Day2.types";

export const getPolicyAndPasswords = (data: string): PolicyAndPasswords[] => {
  return data.split("\n").map((line) => {
    const policy = line.slice(0, line.indexOf(":"));
    const minMaxAndRequiredChar = policy.split(" ");
    const minMax = minMaxAndRequiredChar[0];
    const min = parseInt(minMax.split("-")[0]);
    const max = parseInt(minMax.split("-")[1]);
    const requiredCharacter = minMaxAndRequiredChar[1];

    return {
      policy: {
        min,
        max,
        requiredCharacter,
      },
      password: line.slice(line.indexOf(": ") + 2),
    };
  });
};
