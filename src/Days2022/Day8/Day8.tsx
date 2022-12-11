import { GenericDay } from "../../components/GenericDay/GenericDay";
import { addTreetoArray } from "./helpers/addTreeToArray";
import { getTrees } from "./helpers/getTrees";

export const Day8 = () => {
  const getResult1 = (trees: number[][]) => {
    const visibleTrees: string[] = [];

    for (let i = 0; i < trees.length; i++) {
      for (let j = 0; j < trees[i].length; j++) {
        const currentTree = trees[i][j];
        const currentTreeObj = {
          array: visibleTrees,
          row: i,
          column: j,
          tree: currentTree,
        };

        let isVisible = true;
        let treeToCompare = -1;

        for (let top = 0; top < i && isVisible; top++) {
          treeToCompare = trees[top][j];

          if (treeToCompare >= currentTree) {
            isVisible = false;
          }
        }

        if (isVisible) {
          addTreetoArray(currentTreeObj);
          continue;
        }

        isVisible = true;
        for (let bottom = trees.length - 1; bottom > i && isVisible; bottom--) {
          treeToCompare = trees[bottom][j];

          if (treeToCompare >= currentTree) {
            isVisible = false;
          }
        }

        if (isVisible) {
          addTreetoArray(currentTreeObj);
          continue;
        }

        isVisible = true;
        for (let left = 0; left < j && isVisible; left++) {
          treeToCompare = trees[i][left];

          if (treeToCompare >= currentTree) {
            isVisible = false;
          }
        }

        if (isVisible) {
          addTreetoArray(currentTreeObj);
          continue;
        }

        isVisible = true;
        for (let right = trees[i].length - 1; right > j && isVisible; right--) {
          treeToCompare = trees[i][right];

          if (treeToCompare >= currentTree) {
            isVisible = false;
          }
        }

        if (isVisible) {
          addTreetoArray(currentTreeObj);
          continue;
        }
      }
    }

    return `Number of visible trees is ${visibleTrees.length}`;
  };

  const getResult2 = (trees: number[][]) => {
    let highestScore = 0;

    for (let i = 0; i < trees.length; i++) {
      for (let j = 0; j < trees[i].length; j++) {
        const currentTree = trees[i][j];

        let treeToCompare = -1;
        let viewIsBlocked = false;

        let {
          scenicTreesLeft,
          scenicTreesBottom,
          scenicTreesRight,
          scenicTreesTop,
        } = {
          scenicTreesTop: 0,
          scenicTreesBottom: 0,
          scenicTreesLeft: 0,
          scenicTreesRight: 0,
        };

        for (let top = i - 1; top >= 0 && !viewIsBlocked; top--) {
          treeToCompare = trees[top][j];

          scenicTreesTop++;

          if (treeToCompare >= currentTree) {
            viewIsBlocked = true;
          }
        }

        viewIsBlocked = false;

        for (
          let bottom = i + 1;
          bottom < trees.length && !viewIsBlocked;
          bottom++
        ) {
          treeToCompare = trees[bottom][j];

          scenicTreesBottom++;

          if (treeToCompare >= currentTree) {
            viewIsBlocked = true;
          }
        }

        viewIsBlocked = false;

        for (let left = j - 1; left >= 0 && !viewIsBlocked; left--) {
          treeToCompare = trees[i][left];

          scenicTreesLeft++;

          if (treeToCompare >= currentTree) {
            viewIsBlocked = true;
          }
        }

        viewIsBlocked = false;

        for (
          let right = j + 1;
          right < trees[i].length && !viewIsBlocked;
          right++
        ) {
          treeToCompare = trees[i][right];

          scenicTreesRight++;

          if (treeToCompare >= currentTree) {
            viewIsBlocked = true;
          }
        }

        /*console.log({
          i,
          j,
          scenicTreesBottom,
          scenicTreesTop,
          scenicTreesLeft,
          scenicTreesRight,
        });*/

        const score =
          scenicTreesBottom *
          scenicTreesTop *
          scenicTreesLeft *
          scenicTreesRight;

        if (score > highestScore) {
          highestScore = score;
        }
      }
    }

    return `The tree with the highest scenic score has a score of ${highestScore}`;
  };

  return (
    <GenericDay
      dayNumber={8}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getTrees}
      filePath={"data/2022/Day8/puzzleInput.txt"}
    />
  );
};
