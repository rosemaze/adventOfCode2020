import React from "react";
import { Day1 } from "./Days/Day1/Day1";
import { Day2 } from "./Days/Day2/Day2";
import { Day3 } from "./Days/Day3/Day3";
import { Day4 } from "./Days/Day4/Day4";
import { Day5 } from "./Days/Day5/Day5";
import { Day6 } from "./Days/Day6/Day6";
import { Day7 } from "./Days/Day7/Day7";
import { Day8 } from "./Days/Day8/Day8";
import { Day9 } from "./Days/Day9/Day9";
import { Day10 } from "./Days/Day10/Day10";
import { Day11 } from "./Days/Day11/Day11";
import { Day12 } from "./Days/Day12/Day12";
import { Day13 } from "./Days/Day13/Day13";
import { MainHeader } from "./styles/MainHeader.style";

function App() {
  return (
    <>
      <MainHeader>Advent of Code 2020</MainHeader>
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
    </>
  );
}

export default App;
