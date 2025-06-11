import { useState } from "react";
import B from "./B";

function A() {
  const [name, setName] = useState("Albin");
  const [count, setCount] = useState(0);
  console.log("component A rendered");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <span>{count}</span><br />
      <button onClick={handleClick}>click</button><br />
      A
      <B name={name} />
    </div>
  );
}

export default A;
