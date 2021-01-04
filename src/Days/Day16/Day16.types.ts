export interface TicketsAndRanges {
  allRanges: number[];
  tickets: number[][];
  fieldNameAndRanges: FieldNameAndRanges[];
  myTicket: number[];
}

export interface FieldNameAndRanges {
  ranges: Range[];
  name: string;
}

export interface Range {
  min: number;
  max: number;
}
