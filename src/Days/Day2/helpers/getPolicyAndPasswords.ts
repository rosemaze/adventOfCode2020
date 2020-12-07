import { PolicyAndPasswords } from "../Day2.types";

export const getPolicyAndPasswords = (data: string): PolicyAndPasswords[] =>
  data.split("\n").map((line) => {
    const regex = /([0-9])-([0-9])\s([a-z]):\s([a-z]+)/gi;
    const result = regex.exec(line);

    let min = 0,
      max = 0,
      requiredCharacter = "",
      password = "";
    if (result) {
      min = parseInt(result[1]);
      max = parseInt(result[2]);
      requiredCharacter = result[3];
      password = result[4];
    }
    return {
      policy: {
        min,
        max,
        requiredCharacter,
      },
      password,
    };
  });
