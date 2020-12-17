import { Bag } from "../Day7.types";
import { getUniqueItemsInArray } from "../../../helpers/getUniqueItemsInArray";

export const getAllContainersForBagColor = (options: {
  bagContainersMap: Map<string, Bag[]>;
  bagColor: string;
  accContainers: string[];
}) => {
  const { bagContainersMap, bagColor, accContainers } = options;

  const containers = bagContainersMap.get(bagColor);

  // If there are no containers, return self
  if (!containers || containers.length === 0) {
    return getUniqueItemsInArray<string>([bagColor, ...accContainers]);
  }

  // If each container has more containers
  let containersOfContainers: string[] = [];
  // Get containers of each container
  containers?.forEach((container) => {
    // Get containers for current container
    const containersForCurrentContainer = getAllContainersForBagColor({
      bagContainersMap,
      bagColor: container.color,
      accContainers: [...accContainers, container.color],
    });

    containersOfContainers = [
      ...containersForCurrentContainer,
      ...containersOfContainers,
    ];
  });

  return getUniqueItemsInArray(containersOfContainers);
};
