import { TicketsAndRanges, FieldNameAndRanges, Range } from "../Day16.types";

export const getTicketsAndRanges = (data: string): TicketsAndRanges => {
  const allRanges: number[] = [];
  const tickets: number[][] = [];
  const fieldNameAndRanges: FieldNameAndRanges[] = [];

  data.split("\n").forEach((line) => {
    if (isNaN(parseInt(line.charAt(0)))) {
      // Might be a field range
      const fieldRangeLine = line.split(": ");
      if (fieldRangeLine.length > 1) {
        const rangesLine = fieldRangeLine[1];
        const ranges = rangesLine.split(" or ");

        const rangesForThisField: Range[] = [];
        ranges.forEach((range) => {
          const minAndMax = range.split("-");
          const min = parseInt(minAndMax[0]);
          const max = parseInt(minAndMax[1]);
          for (let i = min; i <= max; i++) {
            allRanges.push(i);
          }

          rangesForThisField.push({ min, max });
        });

        const fieldName = fieldRangeLine[0];
        fieldNameAndRanges.push({
          name: fieldName,
          ranges: rangesForThisField,
        });
      }

      return;
    }

    // Its a ticket
    tickets.push(line.split(",").map((value) => parseInt(value)));
  });

  return {
    allRanges,
    tickets,
    fieldNameAndRanges,
    myTicket: tickets[0],
  };
};
