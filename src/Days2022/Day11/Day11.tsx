import { GenericDay } from "../../components/GenericDay/GenericDay";
import { getData } from "../../helpers/getData";
import { getMonkeyActions } from "./helpers/getMonkeyActions";
import { getMonkeyResults } from "./helpers/getMonkeyResults";

export const Day11 = () => {
  const getResult1 = (data: string) => {
    const monkeyActions = getMonkeyActions(data);

    const { monkeyInspections } = getMonkeyResults({
      monkeyActions,
      numberOfRounds: 20,
    });

    return `The level of monkey business is: ${
      monkeyInspections[0] * monkeyInspections[1]
    }`;
  };

  const getResult2 = (data: string) => {
    const monkeyActions = getMonkeyActions(data);

    const { monkeyInspections } = getMonkeyResults({
      monkeyActions,
      numberOfRounds: 10000,
      reduceWorryLevel: false,
    });

    return `The level of monkey business is: ${
      monkeyInspections[0] * monkeyInspections[1]
    }`;
  };

  return (
    <GenericDay
      dayNumber={11}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getData}
      filePath={"data/2022/Day11/puzzleInput.txt"}
    />
  );
};
