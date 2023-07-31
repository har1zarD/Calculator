import React, { useState } from "react";

interface ButtonProps {
  onClick: (value: string) => void;
  children: string;
  className?: string; // Dodajemo className kao opcioni properti
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    onClick(children);

    setTimeout(() => {
      setIsPressed(false);
    }, 80);
  };

  return (
    <button
      className={`px-4 py-2 bg-gray-200 rounded ${
        isPressed ? "transform scale-90" : ""
      } hover:bg-blue-500 hover:text-white transition-transform ${
        className ? className : "" // Primena prosleđene klase ukoliko postoji
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
