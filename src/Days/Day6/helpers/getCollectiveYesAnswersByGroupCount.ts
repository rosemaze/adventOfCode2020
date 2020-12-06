import { Group } from "../Days6.types";

export const getCollectiveYesAnswersByGroupCount = (groups: Group[]) => {
  let allCollectiveAnswersCount = 0;

  groups.forEach((group) => {
    let collectiveAnswers = group.members[0].answers;
    for (let i = 0; i < group.members.length; i++) {
      const currentGroupMemberAnswers = group.members[i].answers;

      // Find intersection of each member's answers with the current collective answers list
      collectiveAnswers = collectiveAnswers.filter(
        (answer) => currentGroupMemberAnswers.indexOf(answer) !== -1
      );
    }

    allCollectiveAnswersCount += collectiveAnswers.length;
  });

  return allCollectiveAnswersCount;
};
