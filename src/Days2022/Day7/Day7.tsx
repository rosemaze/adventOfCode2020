import { GenericDay } from "../../components/GenericDay/GenericDay";
import { Directory, FilesAtEachDirectory } from "./Day7.types";
import { getDirectory } from "./helpers/getDirectory";
import { getFileSystem } from "./helpers/getFileSystem";
import { getRecursiveDirectories } from "./helpers/getRecursiveDirectories";
import { getSizeOfDirectory } from "./helpers/getSizeOfDirectory";

export const Day7 = () => {
  const DISK_SPACE = 70000000;
  const REQUIRED_UNUSED_SPACE = 30000000;

  const getResult1 = (props: {
    fileSystem: Directory;
    files: FilesAtEachDirectory;
    directories: string[];
  }) => {
    const { fileSystem, files, directories } = props;

    // Calculate size of each directory
    const sizeOfEachDirectory = directories.map((directoryName) =>
      getSizeOfDirectory({ name: directoryName, files, fileSystem })
    );

    const totalSizeOfDirectoriesLessThan100000 = sizeOfEachDirectory
      .filter((sizeOfDirectory) => sizeOfDirectory.size <= 100000)
      .reduce((acc, cur) => (acc += cur.size), 0);

    return `The sum of all directories smaller than 100000 is ${totalSizeOfDirectoriesLessThan100000}`;
  };

  const getResult2 = (props: {
    fileSystem: Directory;
    files: FilesAtEachDirectory;
    directories: string[];
  }) => {
    const { fileSystem, files, directories } = props;

    const sizeOfRoot = getSizeOfDirectory({ name: "root", files, fileSystem });

    const freeSpace = DISK_SPACE - sizeOfRoot.size;

    const needToDeleteAtLeast = REQUIRED_UNUSED_SPACE - freeSpace;

    const directoryToDelete = directories
      .map((directoryName) =>
        getSizeOfDirectory({
          name: directoryName,
          files,
          fileSystem,
        })
      )
      .filter((sizeOfDirectory) => sizeOfDirectory.size >= needToDeleteAtLeast)
      .sort((a, b) => a.size - b.size)[0];

    return `Smallest directory to delete is ${directoryToDelete.directoryName} with total size ${directoryToDelete.size}`;
  };

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
