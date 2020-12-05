import React from "react";
import { Day1 } from "./Days/Day1/Day1";
import { Day2 } from "./Days/Day2/Day2";
import { Day3 } from "./Days/Day3/Day3";
import { Day4 } from "./Days/Day4/Day4";
import { Day5 } from "./Days/Day5/Day5";
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
    </>
  );
}

export default App;
