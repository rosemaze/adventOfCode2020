import { Directory } from "../Day7.types";

export const getRecursiveDirectories = (
  directory: Directory | null,
  foundDirectories: string[]
): string[] => {
  const parentPath = foundDirectories[0] ?? "";

  for (var key in directory) {
    foundDirectories.push(parentPath + "/" + key);
  }

  for (var keyNext in directory) {
    const nextDirectories = getRecursiveDirectories(
      directory[keyNext],
      foundDirectories
    );

    foundDirectories.concat(nextDirectories);
  }

  // We should not reach here if every directory is valid
  return foundDirectories;
};
