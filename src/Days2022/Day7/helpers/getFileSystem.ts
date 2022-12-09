import { Directory, FilesAtEachDirectory } from "../Day7.types";
import { getDirectory } from "./getDirectory";

const fileSystem: Directory = { root: {} };
const files: FilesAtEachDirectory = {};
const directories: string[] = [];

const addToDirectory = ({
  name,
  entry,
  path,
}: {
  name: string;
  entry: string;
  path: string[];
}) => {
  const pathAsString = path.join("/");
  const directoryToAddTo = getDirectory(path, fileSystem);

  if (!directoryToAddTo) {
    console.warn(`Warning!!!, directory ${name} not found at ${path}!`);
    return;
  }

  if (entry.startsWith("dir")) {
    // Create directory
    const directoryName = entry.split(" ")[1];

    if (!directoryToAddTo[directoryName]) {
      console.log("creating directory", directoryName, "path is", pathAsString);
      directoryToAddTo[directoryName] = {};

      directories.push(pathAsString + "/" + directoryName);
    }
  } else {
    // Add file
    const [size, fileName] = entry.split(" ");

    const currentFiles = files[pathAsString];

    const fileToAdd = { name: fileName, size: parseInt(size) };

    if (currentFiles) {
      files[pathAsString].push(fileToAdd);
    } else {
      files[pathAsString] = [fileToAdd];
    }
  }
};

export const getFileSystem = (data: string) => {
  let currentPath: string[] = [];

  data.split("\n").forEach((line) => {
    // Execute commands
    if (line.startsWith("$ cd")) {
      const directoryName = line.split(" ")[2];

      if (directoryName === "..") {
        console.log("go one level up");
        // "$ cd .." Navigate back one level
        currentPath.pop();
      } else {
        // "$ cd a" Navigate to directory and create directory
        currentPath.push(directoryName === "/" ? "root" : directoryName);
        console.log(
          `pushing ${directoryName} to ${currentPath.join(
            "/"
          )} from command ${line}`
        );
      }
    } else if (line.startsWith("$ ls")) {
      // List all contents do nothing
    } else if (line !== "") {
      // Listing contents of directory
      addToDirectory({
        name: currentPath[currentPath.length - 1],
        entry: line,
        path: currentPath,
      });
    }
  });

  console.log({ directories });

  return {
    fileSystem,
    files,
    directories,
  };
};
