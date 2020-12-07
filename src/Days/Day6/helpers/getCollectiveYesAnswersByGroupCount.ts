import { Group } from "../Days6.types";
import { getIntersectionOfAllMembersAnswers } from "./getIntersectionOfAllMembersAnswers";

export const getCollectiveYesAnswersByGroupCount = (groups: Group[]) =>
  groups
    .map((group) => getIntersectionOfAllMembersAnswers(group).length)
    .reduce(
      (acc, collectiveYesAnswersByGroup) => acc + collectiveYesAnswersByGroup
    );
