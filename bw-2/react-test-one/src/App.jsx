import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return { count: 0 };
  }
}

function App() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <span>Count : {state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default App;
