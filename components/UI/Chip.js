import React from "react";

export const Chip = ({ children, className }) => {
  return (
    <div
      className={`${className} px-4 pt-1 my-2 border-2 w-[140px] mx-auto text-sm rounded-lg duration-300 cursor-pointer`}
    >
      {children}
    </div>
  );
};
