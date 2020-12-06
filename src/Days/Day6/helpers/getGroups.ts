import { Group } from "../Days6.types";

export const getGroups = (data: string) => {
  let group: Group = { members: [] };
  const allGroups: Group[] = [];

  data.split("\n").forEach((line) => {
    if (!line) {
      allGroups.push(group);
      group = { members: [] };
      return;
    }

    group.members.push({ answers: line.split("").map((answer) => answer) });
  });

  // Hacky
  allGroups.push(group);

  return allGroups;
};
