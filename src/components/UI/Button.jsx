import React from "react";

function Button({ onClick, type, children }) {
  return (
    <button
      onClick={onClick}
      className='bg-[#251e40] text-white px-4 py-[6px] rounded text-lg font-semibold'
      type={type || "button"}
    >
      {children}
    </button>
  );
}

export default Button;
