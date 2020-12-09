import { Group } from "../Days6.types";
import { getUnionOfAllMembersAnswers } from "./getUnionOfAllMembersAnswers";

export const getUnionOfYesAnswersByGroupCount = (groups: Group[]) =>
  groups
    .map((group) => getUnionOfAllMembersAnswers(group).length)
    .reduce(
      (acc, uniqueYesAnswersByGroupCount) => acc + uniqueYesAnswersByGroupCount
    );
