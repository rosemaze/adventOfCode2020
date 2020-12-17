import { JoltsNode } from "../Day10.types";

// This is super inefficient - traversing the tree recursively for trillions of paths will hang the browser
// Use getBranchCount instead
export const getAdapterTree = (options: {
  joltsRatings: number[];
  joltsRating: number;
}): JoltsNode => {
  const { joltsRatings, joltsRating } = options;

  const level = joltsRatings.indexOf(joltsRating);

  if (level === joltsRatings.length - 1) {
    return {
      value: joltsRating,
      children: [],
    };
  }

  const next3JoltRatings = joltsRatings.slice(level + 1, level + 4);
  const possibleNextJoltRatings = next3JoltRatings.filter(
    (nextJoltRating) => nextJoltRating <= joltsRating + 3
  );

  return {
    value: joltsRating,
    children: possibleNextJoltRatings.map((possibleNextJoltRating) =>
      getAdapterTree({ joltsRatings, joltsRating: possibleNextJoltRating })
    ),
  };
};
