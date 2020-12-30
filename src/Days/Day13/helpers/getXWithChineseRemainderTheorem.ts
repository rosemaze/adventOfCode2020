import { ChineseRemainderMember } from "../Day13.types";

export const getXWithChineseRemainderTheorem = (
  members: ChineseRemainderMember[]
) =>
  members.reduce(
    (accMember, member) => {
      const product = members
        .filter((coPrime) => coPrime.coprime !== member.coprime)
        .reduce((acc, complementCoprime) => complementCoprime.coprime * acc, 1);

      let multiplier = 1;
      while ((multiplier * product) % member.coprime !== member.remainder) {
        multiplier++;
      }

      return {
        coprime: multiplier * product + accMember.coprime,
        remainder: 0,
      };
    },
    { coprime: 0, remainder: 0 }
  );
