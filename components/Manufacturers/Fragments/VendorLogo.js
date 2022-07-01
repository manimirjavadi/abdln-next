import React from "react";
import Image from "next/image";

export const VendorLogo = ({ source, alt = "عبدالهیان" }) => {
  return (
    <div className="w-full h-[100px] bg-white rounded-2xl flex justify-center overflow-hidden">
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
