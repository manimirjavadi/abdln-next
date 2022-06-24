import React from "react";
import Image from "next/image";

export const VendorLogo = ({ source, alt = "عبداللهیان" }) => {
  return (
    <div className="w-full h-[200px] bg-white rounded-2xl flex justify-center">
      <Image
        src={source}
        alt={alt}
        height="200px"
        width="200px"
        objectFit="contain"
      />
    </div>
  );
};
