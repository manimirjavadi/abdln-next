import Image from "next/image";
import React from "react";

export const NewsCard = ({ theNews }) => {
  const featuredMedia = theNews["_embedded"]["wp:featuredmedia"][0];
  return (
    <div className="cursor-pointer">
      <div className="newsCard h-full relative">
        {/* News Image */}
        <div className="p-5 w-full h-full">
          <Image
            className="hover:blur-sm duration-200 shadow-lg"
            alt="خاک دیاتومه"
            src={featuredMedia["source_url"]}
            height="100%"
            width="100%"
            layout="fill"
            objectFit="cover"
          />
          {/* News description */}
          <div className="absolute bottom-[-14px] right-[-10px] w-[110%] h-32 bg-white blur-lg" />
          <div className="newsDIV absolute w-full bottom-0 right-0 px-2 pb-3">
            <p className="text-black font-bold w-full line-clamp-3">
              {theNews.title.rendered}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
