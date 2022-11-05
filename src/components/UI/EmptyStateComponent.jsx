import React from "react";
import Card from "./Card";
function EmptyStateComponent({ message }) {
  return (
    <Card>
      <div className='font-semibold text-white text-xl w-full h-full flex items-center justify-center'>
        <h1>{message}</h1>
      </div>
    </Card>
  );
}

export default EmptyStateComponent;
