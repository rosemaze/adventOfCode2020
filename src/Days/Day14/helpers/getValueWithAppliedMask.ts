export const getValueWithAppliedMask = ({
  value,
  mask,
}: {
  value: number;
  mask: string;
}) =>
  parseInt(
    (value >>> 0)
      .toString(2)
      .padStart(mask.length, "0")
      .split("")
      .reduce(
        (accBits, bit, index) =>
          mask.charAt(index) === "X"
            ? (accBits += bit)
            : (accBits += mask.charAt(index)),
        ""
      ),
    2
  );
