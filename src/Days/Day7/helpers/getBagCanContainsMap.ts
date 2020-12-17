import { Bag, CanContain } from "../Day7.types";

export const getBagCanContainsMap = (bagAndRules: Bag[]) => {
  const bagToCanContainsMap: Map<string, CanContain[]> = new Map();

  bagAndRules.forEach((container) => {
    const childBags = bagToCanContainsMap.get(container.color);

    const children = container.canContain || [];

    if (childBags && childBags.length > 0) {
      bagToCanContainsMap.set(container.color, [...childBags, ...children]);
    }

    bagToCanContainsMap.set(container.color, children);
  });

  return bagToCanContainsMap;
};
