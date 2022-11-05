import React from "react";

function Card({ children }) {
  return (
    <div className='bg-[#161618] text-white p-5 border border-neutral-800 shadow-md rounded max-w-4xl m-auto min-h-fit'>
      {children}
    </div>
  );
}

export default Card;
