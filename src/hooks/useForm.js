import { useState } from "react";

export const useForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return { inputValue, handleInputValue };
};
