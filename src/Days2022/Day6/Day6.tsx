import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getData } from "../../helpers/getData";
import { getMarkerPosition } from "./helpers/getMarkerPosition";
import { getMarkerPositionWithXDifferentChars } from "./helpers/getMarkerPositionWithXDifferentChars";

export const Day6 = () => {
  const getResult1 = (data: string) =>
    `The marker is after position ${getMarkerPosition(data.split(""))}`;

  const getResult2 = (data: string) =>
    `The marker is after position ${getMarkerPositionWithXDifferentChars({
      signal: data.split(""),
      numberOfDifferentChars: 14,
    })}`;

  return (
    <GenericDay
      dayNumber={6}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getData}
      filePath={"data/2022/Day6/puzzleInput.txt"}
    />
  );
};
