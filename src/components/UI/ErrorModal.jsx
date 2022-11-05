import React from "react";
import Button from "./Button";

function ErrorModal({ title, message, onConfirm }) {
  return (
    <div>
      <div
        className='absolute h-screen w-full bg-white/20'
        onClick={onConfirm}
      ></div>
      <div className='absolute  top-[175px] left-[380px] flex flex-col gap-3 min-h-fit w-[600px] m-auto border text-white border-neutral-700 rounded bg-[#202425]'>
        <div className='rounded bg-[#251e40] h-15 px-5 py-5 p w-full flex items-center border-neutral-700'>
          <h1 className='font-black text-2xl'>{title}</h1>
        </div>
        <div className=' px-5 py-5'>
          <p>{message}</p>
        </div>
        <div className=' px-5 py-5 flex w-full justify-end'>
          <Button onClick={onConfirm}>Okay</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
