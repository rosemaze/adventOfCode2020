export const getCRTRow = ({
  crtRows,
  register,
  cycle,
}: {
  crtRows: { [key: string]: string[] };
  register: number;
  cycle: number;
}) => {
  const crtRowKeys = [40, 80, 120, 160, 200, 240];

  const crtRowKey = crtRowKeys.find((key) => cycle <= key) ?? 0;

  const crtRow = crtRows[crtRowKey + ""];

  const crtPosition = cycle - 1 - (crtRowKey / 40 - 1) * 40;

  if (crtPosition >= register - 1 && crtPosition <= register + 1) {
    crtRow[crtPosition] = "#";
  } else {
    crtRow[crtPosition] = ".";
  }

  return crtRows;
};
