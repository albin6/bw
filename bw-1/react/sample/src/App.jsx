import React, { useMemo, useState } from "react";
import { useFormHandler } from "./hooks/useFormHandler";

function App() {
  const { handleChange, name } = useFormHandler();
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default App;
