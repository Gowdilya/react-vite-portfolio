import React, { useState } from "react";
import "./TextInput.css";
interface TextInputProps {
  onSendMessage: (message: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent default form submission behavior
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <input
      className="text-input"
      type="text"
      placeholder="Ask Something..."
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
    />
  );
};

export default TextInput;
