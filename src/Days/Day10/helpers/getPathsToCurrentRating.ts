export const getPathsToCurrentRating = ({
  currentRating,
  lastThreeRatings,
}: {
  currentRating: number;
  lastThreeRatings: number[];
}) =>
  lastThreeRatings.filter((lastRating) => currentRating - lastRating <= 3)
    .length;
