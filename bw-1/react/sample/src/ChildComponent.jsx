import React from "react";

function ChildComponent({ value }) {
  return (
    <>
      <h3>This is child component {value.name}</h3>
      <button>click to send data</button>
    </>
  );
}

export default ChildComponent;
