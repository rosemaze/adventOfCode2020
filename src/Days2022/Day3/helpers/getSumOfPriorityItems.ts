import { PRIORITY_INDEX } from "../Day3.constants";

export const getSumOfPriorityItems = (items: string[][]) => {
  let sumOfPriorities = 0;

  items.forEach((item) => {
    const half = Math.ceil(item.length / 2);
    const items1 = item.slice(0, half);
    const items2 = item.slice(-half);

    let found = false;
    let priorityItem = "";
    for (let i = 0; i < items1.length && !found; i++) {
      const currentItem = items1[i];

      found = items2.includes(currentItem);

      if (found) {
        priorityItem = currentItem;
      }
    }

    sumOfPriorities += PRIORITY_INDEX.findIndex(
      (priority) => priority === priorityItem
    );
  });

  return sumOfPriorities;
};
