import { Bag, CanContain } from "../Day7.types";

export const getAllCanContainsForBag = (options: {
  bagCanContainsMap: Map<string, CanContain[]>;
  bag: Bag;
}) => {
  const { bagCanContainsMap, bag } = options;

  const currentCanContain = bagCanContainsMap.get(bag.color);

  // If there are no canContains for this bag, return accumulated children
  if (!currentCanContain || currentCanContain.length === 0) {
    return 0;
  }

  // Get canContains of current canContains
  let canContainsOfCanContain = 0;
  // Get containers of each container
  currentCanContain?.forEach((currentCanContain) => {
    // Get containers for current container
    const canContainsForCurrentCanContain =
      currentCanContain.howMany +
      currentCanContain.howMany *
        getAllCanContainsForBag({
          bagCanContainsMap,
          bag: currentCanContain.bag,
        });

    canContainsOfCanContain += canContainsForCurrentCanContain;

    console.log({ canContainsOfCanContain });
  });

  console.log({ canContainsOfCanContain });
  return canContainsOfCanContain;
};
