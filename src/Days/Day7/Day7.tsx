import React from "react";
import { getBagAndRules } from "./helpers/getBagAndRules";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Bag } from "./Day7.types";
import { getBagContainersMap } from "./helpers/getBagContainersMap";
import { getAllContainersForBagColor } from "./helpers/getAllContainersForBag";
import { getBagCanContainsMap } from "./helpers/getBagCanContainsMap";
import { getAllCanContainsForBag } from "./helpers/getAllCanContainsForBag";

export const Day7 = () => {
  const getResult1 = (bagAndRules: Bag[]) => {
    const bagContainersMap = getBagContainersMap(bagAndRules);

    const allContainersForShinyGoldBag = getAllContainersForBagColor({
      bagContainersMap,
      bagColor: "shiny gold",
      accContainers: [],
    });

    return `Number of bags that can eventually contain a shiny gold bag: ${allContainersForShinyGoldBag.length}`;
  };

  const getResult2 = (bagAndRules: Bag[]) => {
    const bagCanContainsMap = getBagCanContainsMap(bagAndRules);
    const allCanContainsForShinyGoldBag = getAllCanContainsForBag({
      bagCanContainsMap,
      bag: {
        color: "shiny gold",
        canContain: bagCanContainsMap.get("shiny gold"),
      },
    });

    return `Number of bags that can be contained by one gold bag: ${allCanContainsForShinyGoldBag}`;
  };

  return (
    <GenericDay
      dayNumber={7}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getBagAndRules}
      filePath="data/Day7/puzzleInput1.txt"
    />
  );
};
