import { Group } from "../Days6.types";

export const getIntersectionOfAllMembersAnswers = (group: Group) =>
  group.members[0].answers.filter((answer) =>
    group.members.every((member) => member.answers.includes(answer))
  );
