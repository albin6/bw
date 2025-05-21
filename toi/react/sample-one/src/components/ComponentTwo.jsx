import React from "react";
import { useSelector } from "react-redux";

function ComponentTwo() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <hr />
      ComponentTwo
      <div>Data from store : {count}</div>
      <hr />
    </div>
  );
}

export default ComponentTwo;
