import { Directory, FilesAtEachDirectory } from "../Day7.types";
import { getDirectory } from "./getDirectory";
import { getRecursiveDirectories } from "./getRecursiveDirectories";

export const getSizeOfDirectory = (
  name: string,
  fileSystem: Directory,
  files: FilesAtEachDirectory
) => {
  const directory = getDirectory(name.split("/"), fileSystem);

  const childDirectories = getRecursiveDirectories(directory, [name]);

  return {
    directoryName: name,
    size: childDirectories.reduce(
      (accDirectories, curChildDirectory) =>
        (accDirectories += files[curChildDirectory]
          ? files[curChildDirectory].reduce(
              (accFileSize, curFileSize) => (accFileSize += curFileSize.size),
              0
            )
          : 0),
      0
    ),
  };
};
