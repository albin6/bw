import React from "react";
import { useDispatch } from "react-redux";

import { increment } from "../redux/slices/counter-slice";

function ComponentThree() {
  const dispatch = useDispatch();
  return (
    <div>
      ComponentThree
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
    </div>
  );
}

export default ComponentThree;
