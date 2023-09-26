import React, { useState } from "react";
// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
