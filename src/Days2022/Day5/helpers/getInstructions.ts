const regex = /move ([0-9]*) from ([0-9]) to ([0-9])/i;

export const getInstructions = (data: string) =>
  data
    .split("\n")
    .filter((line) => !line.indexOf("move"))
    .map((instruction) => {
      const result = regex.exec(instruction);
      return result
        ? {
            numberOfCrates: parseInt(result[1]),
            from: parseInt(result[2]),
            to: parseInt(result[3]),
          }
        : { numberOfCrates: 0, from: 0, to: 0 }; // Should not get here if data is formatted correctly
    });
