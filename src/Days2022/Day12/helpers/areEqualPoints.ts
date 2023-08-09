import { Point } from "../Day12.types";

export const areEqualPoints = (pointA: Point, pointB: Point) =>
  pointA[0] === pointB[0] && pointA[1] === pointB[1];
