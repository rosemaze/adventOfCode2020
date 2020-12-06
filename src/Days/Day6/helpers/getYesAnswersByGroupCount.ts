import { Group } from "../Days6.types";

export const getYesAnswersByGroupCount = (groups: Group[]) => {
  let uniqueYesAnswersByGroupCount = 0;
  let uniqueYesAnswersByGroup: string[] = [];

  groups.forEach((group) => {
    uniqueYesAnswersByGroup = [];

    group.members.forEach((member) => {
      member.answers.forEach((answer: string) => {
        if (uniqueYesAnswersByGroup.indexOf(answer) === -1) {
          // Answer does not exist for this group yet, add it to the count
          uniqueYesAnswersByGroup.push(answer);
        }
      });
    });

    uniqueYesAnswersByGroupCount += uniqueYesAnswersByGroup.length;
  });

  return uniqueYesAnswersByGroupCount;
};
