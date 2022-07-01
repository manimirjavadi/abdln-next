import React from "react";
import Image from "next/dist/client/image";

import antiAging from "../../../assets/images/antiAging.png";
import antiOxidation from "../../../assets/images/antiOxidation.png";
import cosmetics from "../../../assets/images/cosmetics.png";
import hariCare from "../../../assets/images/hariCare.png";
import hydration from "../../../assets/images/hydration.png";
import skinCare from "../../../assets/images/skinCare.png";

export const SproductCard = ({ cosmetic }) => {
  return (
    <div className="h-[360px] border-l-[10px] border-abdlOrange rounded-lg bg-white px-6 py-4 relative">
      <h5 className="text-black">{cosmetic.title.rendered}</h5>
      {/* Inci Name */}
      <div className="w-full mt-3">
        <span className="text-gray-700 text-sm font-bold">INCI Name: </span>
        <span className="text-gray-500 text-sm font-thin">
          {cosmetic.acf.inci_name}
        </span>
      </div>
      {/* Application */}
      <div className="w-full mt-3">
        <span className="text-gray-700 text-sm font-bold">Application: </span>
        <span className="text-gray-500 text-sm font-thin">
          {cosmetic.acf.application}
        </span>
      </div>
      {/* Recommended */}
      <div className="w-full mt-3">
        <span className="text-gray-700 text-sm font-bold">
          Recommended Use Level:{" "}
        </span>
        <span className="text-gray-500 text-sm font-thin">
          {cosmetic.acf.recommended_use_level}
        </span>
      </div>

      {/* Solubility */}
      <div className="w-full mt-3">
        <span className="text-gray-700 text-sm font-bold">Solubility: </span>
        <span className="text-gray-500 text-sm font-thin">
          {cosmetic.acf.solubility}
        </span>
      </div>
      <div className="grid grid-cols-6 absolute bottom-[10px] gap-1">
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={antiAging} />
        </div>
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={antiOxidation} />
        </div>
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={cosmetics} />
        </div>
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={hariCare} />
        </div>
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={hydration} />
        </div>
        <div className="h-[45px] w-[45px] relative">
          <Image alt="Abdollahian" src={skinCare} />
        </div>
      </div>
    </div>
  );
};
