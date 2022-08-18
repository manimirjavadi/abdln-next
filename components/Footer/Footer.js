import React from "react";
import { Details } from "./Details";

export const Footer = ({ otherPages = false }) => {
  return (
    <div
      className={`${
        otherPages ? "p-8 " : "p-20 "
      } max-w-5xl mx-auto w-full px-16 bg-white rounded-t-3xl`}
    >
      <div className="grid grid-cols-1 gap-8">
        {/* <div className="theForm w-full">
          <TheForm />
        </div> */}
        <div className="theDetails w-full pr-8">
          <Details />
        </div>
      </div>
      <div className="flex justify-center border-t-2 border-abdlBlue mt-8 pt-2 text-abdlBlue font-bold">
        تمام حقوق این سایت متعلق به گروه بازرگانی عبدالهیان است.
      </div>
    </div>
  );
};
