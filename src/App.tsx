import React from "react";
import { Day1 } from "./Days/Day1/Day1";
import { Day2 } from "./Days/Day2/Day2";
import { Day3 } from "./Days/Day3/Day3";
import { MainHeader } from "./styles/MainHeader.style";

function App() {
  return (
    <>
      <MainHeader>Advent of Code 2020</MainHeader>
      <Day1 />
      <Day2 />
      <Day3 />
    </>
  );
}

export default App;
