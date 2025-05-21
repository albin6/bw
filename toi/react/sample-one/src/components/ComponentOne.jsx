import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../redux/slices/counter-slice";

function ComponentOne() {
  const dispatch = useDispatch();
  return (
    <div>
      ComponentOne
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default ComponentOne;
