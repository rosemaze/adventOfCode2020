export const getPairedAssignedRanges = (data: string) =>
  data.split("\n").map((line) => {
    if (line === "") {
      // Handle weird empty line
      return { first: { start: 0, end: 0 }, second: { start: 0, end: 0 } };
    }

    const pairs = line.split(",");
    return {
      first: {
        start: parseInt(pairs[0].split("-")[0]),
        end: parseInt(pairs[0].split("-")[1]),
      },
      second: {
        start: parseInt(pairs[1].split("-")[0]),
        end: parseInt(pairs[1].split("-")[1]),
      },
    };
  });
