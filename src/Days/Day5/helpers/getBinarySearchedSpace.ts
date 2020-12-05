export const getBinarySearchedSpace = (options: {
  characters: string;
  space: number;
  floor: number;
  upperCharacter: string;
  lowerCharacter: string;
}): number => {
  const { characters, space, floor, upperCharacter, lowerCharacter } = options;

  if (characters.length === 0) {
    return floor;
  }

  const currentCharacter = characters.charAt(0);

  const currentSpace = space / 2;

  let currentFloor = 0;
  if (currentCharacter === upperCharacter) {
    currentFloor = floor;
  }

  if (currentCharacter === lowerCharacter) {
    currentFloor = floor + currentSpace;
  }

  return getBinarySearchedSpace({
    characters: characters.slice(1),
    space: currentSpace,
    floor: currentFloor,
    upperCharacter,
    lowerCharacter,
  });
};
