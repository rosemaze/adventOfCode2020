import { BADFLAGS } from "dns";

export interface Bag {
  color: string;
  canContain?: CanContain[];
}

export interface CanContain {
  howMany: number;
  bag: Bag;
}
