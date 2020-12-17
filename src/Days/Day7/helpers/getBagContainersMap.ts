import { Bag } from "../Day7.types";

export const getBagContainersMap = (bags: Bag[]) => {
  const bagToContainersMap: Map<string, Bag[]> = new Map();

  bags.forEach((bag) => {
    const bagChildren = bag.canContain?.map((child) => child.bag.color);
    bagChildren?.forEach((bagChild) => {
      const ancestors = bagToContainersMap.get(bagChild);
      if (ancestors && ancestors.length > 0) {
        bagToContainersMap.set(bagChild, [...ancestors, bag]);
        return;
      }
      bagToContainersMap.set(bagChild, [bag]);
    });
  });

  const allUniqueBagColors: string[] = [];
  bags.forEach((bag) => {
    if (allUniqueBagColors.indexOf(bag.color) === -1) {
      allUniqueBagColors.push(bag.color);
    }
  });

  console.log({ allUniqueBagColors });

  return bagToContainersMap;
};
