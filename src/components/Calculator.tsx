import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

import clickSound from "../sound/clickSound.wav";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const playClickSound = () => {
    new Audio(clickSound).play();
  };

  const handleButtonClick = (value: string) => {
    playClickSound();
    const isOperator = ["+", "-", "*", "/", "%"].includes(value);
    const lastChar = input.charAt(input.length - 1);
    if (isOperator && (input === "" || ["+", "-", "*", "/", "%"].includes(lastChar))) {
      return;
    }
    if (value === "." && input.includes(".")) {
      return;
    }
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    playClickSound();
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    playClickSound();
    setInput("");
    setResult("");
  };

  const handleUndo = () => {
    playClickSound();
    setInput((prev) => prev.slice(0, -1));
  };

  const handleSquare = () => {
    playClickSound();
    setInput((prev) => `${Math.pow(parseFloat(prev), 2)}`);
  };

  const handleSquareRoot = () => {
    playClickSound();
    setInput((prev) => `${Math.sqrt(parseFloat(prev))}`);
  };

  const handlePercentage = () => {
    playClickSound();
    setInput((prev) => `${(parseFloat(prev) / 100).toString()}`);
  };

  return (
    <div className='container mx-auto mt-8 max-w-sm border rounded-md border-gray-500'>
      <div className='bg-gradient-to-r from-gray-700 to-gray-500 pt-2 pb-4 px-5 rounded-t-md'>
        <h2 className='text-xl text-white text-bold pb-1'>CALCULATOR</h2>
        <Display input={input} result={result} />
      </div>
      <div className='grid grid-cols-4 gap-2 py-4 px-3 bg-gradient-to-r from-blue-800 to-blue-500 rounded-b-md'>
        <Button onClick={handleUndo} className='bg-gray-400'>
          ⌫
        </Button>
        <Button onClick={handleSquare} className='bg-gray-400'>
          x²
        </Button>
        <Button onClick={handleSquareRoot} className='bg-gray-400'>
          √
        </Button>
        <Button onClick={handlePercentage} className='bg-gray-400'>
          %
        </Button>
        <Button onClick={handleButtonClick}>7</Button>
        <Button onClick={handleButtonClick}>8</Button>
        <Button onClick={handleButtonClick}>9</Button>
        <Button onClick={handleButtonClick} className='bg-gray-400'>
          /
        </Button>
        <Button onClick={handleButtonClick}>4</Button>
        <Button onClick={handleButtonClick}>5</Button>
        <Button onClick={handleButtonClick}>6</Button>
        <Button onClick={handleButtonClick} className='bg-gray-400'>
          *
        </Button>
        <Button onClick={handleButtonClick}>1</Button>
        <Button onClick={handleButtonClick}>2</Button>
        <Button onClick={handleButtonClick}>3</Button>
        <Button onClick={handleButtonClick} className='bg-gray-400'>
          -
        </Button>
        <Button onClick={handleButtonClick}>0</Button>
        <Button onClick={handleButtonClick}>.</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={handleButtonClick} className='bg-gray-400'>
          +
        </Button>
        <button className='px-2 py-2 bg-gray-500 text-white rounded hover:bg-gray-900' onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
