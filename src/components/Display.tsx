import React from "react";

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className='flex flex-col items-end border-2 rounded pr-3 border-gray-500 bg-gray-200 overflow-hidden'>
      <div className='text-2xl mb-2'>{input || "0"}</div>
      <div className='text-3xl font-bold'> {result || "0"}</div>
    </div>
  );
};

export default Display;
