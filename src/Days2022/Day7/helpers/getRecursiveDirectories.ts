import { Directory } from "../Day7.types";

export const getRecursiveDirectories = ({
  name,
  directory,
  foundDirectories,
}: {
  name: string;
  directory: Directory | null;
  foundDirectories: string[];
}): string[] => {
  for (var key in directory) {
    foundDirectories.push(name === "" ? key : name + "/" + key);
  }

  for (var keyNext in directory) {
    const nextDirectories = getRecursiveDirectories({
      name: name === "" ? keyNext : name + "/" + keyNext,
      directory: directory[keyNext],
      foundDirectories,
    });

    foundDirectories.concat(nextDirectories);
  }

  // We should not reach here if every directory is valid
  return foundDirectories;
};
