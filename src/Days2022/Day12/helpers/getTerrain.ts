import { Letter } from "../Day12.types";

export const getTerrain = (data: string): Letter[][] =>
  data
    .split("\n")
    .map((line) => line.split("").map((point) => point as unknown as Letter));
