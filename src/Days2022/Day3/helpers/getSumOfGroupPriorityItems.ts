import { PairedAssignedRange } from "../../Day4/Day4.types";
import { PRIORITY_INDEX } from "../Day3.constants";

export const getSumOfGroupPriorityItems = (items: string[][]) => {
  let sumOfGroupPriorities = 0;
  for (
    let firstIndex = 0;
    firstIndex < items.length;
    firstIndex = firstIndex + 3
  ) {
    const priorityItem = items[firstIndex].find(
      (item) =>
        items[firstIndex + 1].includes(item) &&
        items[firstIndex + 2].includes(item)
    );

    sumOfGroupPriorities += PRIORITY_INDEX.findIndex(
      (priority) => priority === priorityItem
    );
  }

  return sumOfGroupPriorities;
};
