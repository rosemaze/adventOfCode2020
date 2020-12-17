import { getPathsToCurrentRating } from "./getPathsToCurrentRating";

export const getBranchCount = (ratings: number[]) => {
  const branchCounts: number[] = [];

  ratings.forEach((rating, index) => {
    // First rating
    if (branchCounts.length === 0) {
      branchCounts.push(1);
      return;
    }

    const upToThreeIndicesAgo = index - 3 < 0 ? 0 : index - 3;
    const pathsToCurrentRating = getPathsToCurrentRating({
      currentRating: rating,
      lastThreeRatings: [...ratings.slice(upToThreeIndicesAgo, index)],
    });

    if (pathsToCurrentRating === 3) {
      // Sequential for last 3 ratings, branch count is sum of last 3 branch counts
      branchCounts.push(
        branchCounts[index - 1] +
          branchCounts[index - 2] +
          branchCounts[index - 3]
      );
      return;
    }

    if (pathsToCurrentRating === 2) {
      // Sequential for last 2 ratings, branch count is sum of last 2 branch counts
      branchCounts.push(branchCounts[index - 1] + branchCounts[index - 2]);
      return;
    }

    // Last jolts rating was 3 jolts less, only one path, branch count is the same
    branchCounts.push(branchCounts[index - 1]);
  });

  return branchCounts[branchCounts.length - 1];
};

/*
1
branch 1
1,4
branch 1
1,4,7
branch 1
1,4,7,8
branch 1
1,4,7,8,9
branch 2
1,4,7,8,9,11
branch 3
1,4,7,8,9,11,12
branch 5
1,4,7,8,9,11,12,13
branch 8
1,4,7,8,9,11,12,13,14
branch 16
1,4,7,8,9,11,12,13,14,15
branch 29
1,4,7,8,9,11,12,13,14,15,16
branch 53
1,4,7,8,9,11,12,13,14,15,16,17
branch 98
1,4,7,8,9,11,12,13,14,15,16,17,19
branch 151
1,4,7,8,9,11,12,13,14,15,16,17,19,22
branch 151
1,4,7,8,9,11,12,13,14,15,16,17,19,22,23
branch 151
1,4,7,8,9,11,12,13,14,15,16,17,19,22,23,24
branch 302
1,4,7,8,9,11,12,13,14,15,16,17,19,22,23,24,25
branch 604
1,4,7,8,9,11,12,13,14,15,16,17,19,22,23,24,26
branch 1057

if its sequential, branches are sum of last 3 branch counts

if its skipping one, branches are sum of last 2 branch counts

if its skipping two, branches are same as the last branch count 
*/
