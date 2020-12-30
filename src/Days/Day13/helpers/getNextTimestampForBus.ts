export const getNextTimestampForBus = ({
  currentTimestamp,
  busInterval,
}: {
  currentTimestamp: number;
  busInterval: number;
}) => Math.ceil(currentTimestamp / busInterval) * busInterval;
