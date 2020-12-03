import React from "react";
import { Day1 } from "./Days/Day1/Day1";
import { Day2 } from "./Days/Day2/Day2";
import { MainHeader } from "./styles/MainHeader.style";

function App() {
  return (
    <>
      <MainHeader>Advent of Code 2020</MainHeader>
      <Day1 />
      <Day2 />
    </>
  );
}

export default App;
