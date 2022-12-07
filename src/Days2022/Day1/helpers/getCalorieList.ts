export const getCaloriesForEachElf = (data: string) => {
  const caloriesForEachElf: Array<number> = [];
  let currentElfCalories = 0;

  data.split("\n").forEach((line) => {
    const currentItemCalories = parseInt(line);
    if (!isNaN(currentItemCalories)) {
      currentElfCalories += currentItemCalories;
    } else {
      caloriesForEachElf.push(currentElfCalories);
      currentElfCalories = 0;
    }
  });

  caloriesForEachElf.push(currentElfCalories);

  return caloriesForEachElf;
};
