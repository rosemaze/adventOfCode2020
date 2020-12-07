import { Group } from "../Days6.types";

export const getUnionOfAllMembersAnswers = (group: Group) =>
  group.members.reduce((accMember, curMember) => ({
    answers: accMember.answers.concat(
      curMember.answers.filter(
        // Answer does not exist for this group yet, add it to the count
        (answer) => !accMember.answers.includes(answer)
      )
    ),
  })).answers;
