import { Directory, FilesAtEachDirectory } from "../Day7.types";
import { getDirectory } from "./getDirectory";
import { getRecursiveDirectories } from "./getRecursiveDirectories";

export const getSizeOfDirectory = ({
  name,
  fileSystem,
  files,
}: {
  name: string;
  fileSystem: Directory;
  files: FilesAtEachDirectory;
}) => {
  const childDirectories = getRecursiveDirectories({
    name,
    directory: getDirectory(name.split("/"), fileSystem),
    foundDirectories: [],
  });

  const filesAtDirectory = [...(files[name] ?? [])].reduce(
    (acc, cur) => (acc += cur.size),
    0
  );

  const size =
    filesAtDirectory +
    childDirectories.reduce(
      (accDirectories, curChildDirectory) =>
        (accDirectories += files[curChildDirectory]
          ? files[curChildDirectory].reduce(
              (accFileSize, curFileSize) => (accFileSize += curFileSize.size),
              0
            )
          : 0),
      0
    );

  return {
    directoryName: name,
    size,
  };
};
