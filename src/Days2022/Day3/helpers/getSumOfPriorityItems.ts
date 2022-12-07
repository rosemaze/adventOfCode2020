const priorityIndex = [
  "0", // Start from 1
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const getSumOfPriorityItems = (data: string) => {
  let sumOfPriorities = 0;
  data.split("\n").forEach((line) => {
    const items = line.split("").map((item) => item);

    const half = Math.ceil(items.length / 2);
    const items1 = items.slice(0, half);
    const items2 = items.slice(-half);

    let found = false;
    let priorityItem = "";
    for (let i = 0; i < items1.length && !found; i++) {
      const currentItem = items1[i];

      found = items2.includes(currentItem);

      if (found) {
        priorityItem = currentItem;
      }
    }

    const test = priorityIndex.findIndex((item) => item === priorityItem);
    console.log({ priorityItem, test, items });

    sumOfPriorities += priorityIndex.findIndex((item) => item === priorityItem);
  });

  return sumOfPriorities;
};
