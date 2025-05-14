const SampleContext = createContext();

import React, { useState } from "react";

function SampleContext({ children }) {
  const [name, setName] = useState();
  const handleNameChange = (value) => {
    setName(value);
  };
  return children;
}

export default SampleContext;
