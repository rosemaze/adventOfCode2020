import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";
import { BitMaskValue } from "../Day14.types";

export const getLocationWithAppliedMask = ({
  location,
  mask,
}: {
  location: number;
  mask: string;
}) =>
  (location >>> 0)
    .toString(2)
    .padStart(mask.length, "0")
    .split("")
    .reduce((accBits, bit, index) => {
      switch (mask[index]) {
        case "0":
          return accBits + bit;
        case "1":
          return accBits + "1";
        case "X":
          return accBits + "X";
        default:
          return "";
      }
    }, "");
