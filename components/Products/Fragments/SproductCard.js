import React from "react";
import AttrIcons from "../../../components/icons/AttrIcons";

export const SproductCard = ({ cosmetic }) => {
  const jsxIcons = cosmetic.acf.cosmetic_attributes.map((attr) => {
    return (
      <span key={attr.value} title={attr.label} className="cursor-pointer">
        <AttrIcons height={40} width={40}>
          {attr.value}
        </AttrIcons>
      </span>
    );
  });
  return (
    <div
      className="min-h-[360px] pb-[60px] border-l-[10px] border-abdlOrange rounded-lg bg-white px-6 py-4 relative"
      dir="ltr"
    >
      <h5 className="text-black">{cosmetic.title.rendered}</h5>
      {/* Inci Name */}
      <div className="w-full mt-3">
        <span className="text-gray-700 text-sm font-bold">INCI Name: </span>
        <span className="text-gray-500 text-sm font-thin">
          {cosmetic.acf.inci_name}
        </span>
      </div>
      {/* Application */}
      {cosmetic.acf.application && (
        <div className="w-full mt-3">
          <span className="text-gray-700 text-sm font-bold">Application: </span>
          <span className="text-gray-500 text-sm font-thin">
            {cosmetic.acf.application}
          </span>
        </div>
      )}
      {/* Recommended */}
      {cosmetic.acf.recommended_use_level && (
        <div className="w-full mt-3">
          <span className="text-gray-700 text-sm font-bold">
            Recommended Use Level:{" "}
          </span>
          <span className="text-gray-500 text-sm font-thin">
            {cosmetic.acf.recommended_use_level}
          </span>
        </div>
      )}

      {/* Solubility */}
      {cosmetic.acf.solubility && (
        <div className="w-full mt-3">
          <span className="text-gray-700 text-sm font-bold">Solubility: </span>
          <span className="text-gray-500 text-sm font-thin">
            {cosmetic.acf.solubility}
          </span>
        </div>
      )}
      <div className="grid grid-cols-6 absolute bottom-[10px] gap-1">
        {jsxIcons}
      </div>

      {/* Active Component */}
      {cosmetic.acf.active_component && (
        <div className="w-full mt-3">
          <span className="text-gray-700 text-sm font-bold">
            Active Component:{" "}
          </span>
          <span className="text-gray-500 text-sm font-thin">
            {cosmetic.acf.active_component}
          </span>
        </div>
      )}
      <div className="grid grid-cols-6 absolute bottom-[10px] gap-1">
        {jsxIcons}
      </div>
    </div>
  );
};
