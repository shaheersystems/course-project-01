import React from "react";

function Overlay({}) {
  return (
    <div
      className={`h-screen absolute flex items-center justify-center top-0 w-full bg-white/20 `}
    >
      {children}
    </div>
  );
}

export default Overlay;
