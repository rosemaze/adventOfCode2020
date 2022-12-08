import { GenericDay } from "../../components/GenericDay/GenericDay";

export const Day5 = () => {
  const getResult1 = (data: string) => "TODO";

  const getResult2 = (data: string) => "TODO";

  return (
    <GenericDay
      dayNumber={6}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={() => ""}
      filePath={"data/2022/Day6/puzzleInput.txt"}
    />
  );
};
