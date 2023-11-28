import React from "react";
import { useState, useEffect } from "react";

const BurgerMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-1/3">
      {/* Lines */}
      <button
        onClick={() => {
          setOpen(!open);
          props.handleClick();
        }}
        className={`flex flex-col gap-2 cursor-pointer hover:scale-105 items-center justify-center transition-all duration-500 opacity-0 ease-in-out ${props.styling}`}
      >
        <div
          className={`w-8 transition-all duration-500 bg-white h-0.5 ${
            open ? " rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        <div
          className={`w-8 transition-all duration-500 bg-white h-0.5 ${
            open ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 transition-all duration-500 bg-white h-0.5 ${
            open ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default BurgerMenu;
