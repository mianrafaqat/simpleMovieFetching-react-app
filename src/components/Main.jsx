import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Main = () => {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
};

export default Main;
