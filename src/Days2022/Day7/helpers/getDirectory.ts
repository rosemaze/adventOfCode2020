import { Directory } from "../Day7.types";

export const getDirectory = (
  path: string[],
  directory: Directory
): Directory | null => {
  let currentDirectory = directory;

  for (let i = 0; i < path.length; i++) {
    const pathSection = path[i];
    currentDirectory = currentDirectory[pathSection];

    if (!currentDirectory) {
      console.warn(
        `Warning! No directory found for ${pathSection} at path ${path.join(
          "/"
        )}`
      );
      console.log({ path, directory });
    }
  }

  return currentDirectory;
};
