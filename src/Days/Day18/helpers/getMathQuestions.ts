export const getMathQuestions = (data: string) =>
  data.split("\n").map((line) =>
    line
      .split("")
      .filter((char) => char !== " ")
      .join("")
  );
