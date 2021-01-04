export const getAllPossibleBinaryLocations = ({
  floatingLocation,
  locations,
}: {
  floatingLocation: string;
  locations: string[];
}): string[] => {
  if (floatingLocation === "") {
    return locations;
  }

  const currentMaskBit = floatingLocation.charAt(0);
  const remainingFloatingLocation = floatingLocation.slice(1);

  if (currentMaskBit === "X") {
    return getAllPossibleBinaryLocations({
      floatingLocation: remainingFloatingLocation,
      locations:
        locations.length === 0
          ? ["1", "0"]
          : locations
              .map((location) => location + "1")
              .concat(locations.map((location) => location + "0")),
    });
  }

  return getAllPossibleBinaryLocations({
    floatingLocation: remainingFloatingLocation,
    locations:
      locations.length === 0
        ? [currentMaskBit]
        : locations.map((location) => location + currentMaskBit),
  });
};
