import { useState } from "react";

export const useFormHandler = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return { name, handleChange };
};
