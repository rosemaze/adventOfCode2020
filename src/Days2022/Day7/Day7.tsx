import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Directory, FilesAtEachDirectory } from "./Day7.types";
import { getDirectory } from "./helpers/getDirectory";
import { getFileSystem } from "./helpers/getFileSystem";
import { getRecursiveDirectories } from "./helpers/getRecursiveDirectories";

export const Day7 = () => {
  const getResult1 = (props: {
    fileSystem: Directory;
    files: FilesAtEachDirectory;
    directories: string[];
  }) => {
    const { fileSystem, files, directories } = props;

    // Calculate size of each directory
    const sizeOfAllDirectories = directories.map((directoryName) => {
      const directory = getDirectory(directoryName.split("/"), fileSystem);

      const childDirectories = getRecursiveDirectories(directory, [
        directoryName,
      ]);

      return {
        directoryName,
        size: childDirectories.reduce(
          (accDirectories, curChildDirectory) =>
            (accDirectories += files[curChildDirectory]
              ? files[curChildDirectory].reduce(
                  (accFileSize, curFileSize) =>
                    (accFileSize += curFileSize.size),
                  0
                )
              : 0),
          0
        ),
      };
    });

    const sizeOfAllDictionariesUnderThreshold = sizeOfAllDirectories
      .filter((sizeOfDirectory) => sizeOfDirectory.size <= 100000)
      .reduce((acc, cur) => (acc += cur.size), 0);

    return `The sum of all directories smaller than 100000 is ${sizeOfAllDictionariesUnderThreshold}`;
  };

  const getResult2 = (data: any) => "TODO";

  return (
    <GenericDay
      dayNumber={7}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getFileSystem}
      filePath={"data/2022/Day7/puzzleInput.txt"}
    />
  );
};
