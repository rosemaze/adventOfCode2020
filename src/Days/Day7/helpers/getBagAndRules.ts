import { Bag, CanContain } from "../Day7.types";

export const getBagAndRules = (data: string): Bag[] =>
  data.split("\n").map((line) => {
    // const regex = /([a-z|\s]+)\s(contain)\s([.]+)/gi;
    // const result = regex.exec(line);
    // wavy green bags contain 1 posh black bag, 1 faded green bag, 4 wavy red bags.

    const parentAndChild = line.split(" contain ");
    const parentBag = line.split(" contain ")[0];
    const color = parentBag.slice(0, parentBag.indexOf(" bags"));

    if (parentAndChild.length > 1) {
      const contains = parentAndChild[1].split(", ");
      const canContain = contains.map((contain) => {
        const howMany = parseInt(contain.split(" ")[0]);

        return {
          howMany: !isNaN(howMany) ? howMany : 0,
          bag: {
            color: contain.slice(
              contain.indexOf(" ") + 1,
              contain.indexOf(" bag")
            ),
          },
        } as CanContain;
      });

      return {
        color,
        canContain,
      } as Bag;
    }

    return {
      color,
    } as Bag;
  });
