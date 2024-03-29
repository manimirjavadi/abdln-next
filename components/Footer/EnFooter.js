import React from "react";
import { Details } from "./EnDetails";
import { TheForm } from "./TheEnForm";

export const Footer = ({ otherPages = false }) => {
  return (
    <div
      className={`${
        otherPages ? "p-8 " : "p-20 "
      } max-w-5xl mx-auto w-full px-16 bg-white rounded-t-3xl`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="theForm w-full">
          <TheForm />
        </div>
        <div className="theDetails w-full pr-8">
          <Details />
        </div>
      </div>
      <div className="flex justify-center border-t-2 border-abdlBlue mt-8 pt-2 text-abdlBlue font-bold">
        All rights reserved.
      </div>
    </div>
  );
};
