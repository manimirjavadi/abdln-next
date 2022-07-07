import Image from "next/image";
import React from "react";

export const NormalProduct = ({ product }) => {
  let featuredMedia;
  if (product) {
    featuredMedia = product["_embedded"]["wp:featuredmedia"][0];
  }

  return (
    <>
      <div className="productCard shadow-lg hover:shadow-2xl duration-300 cursor-pointer">
        {/* Product Image */}
        <div className="p-5 w-full flex justify-center">
          {product && (
            <Image
              alt={product.title?.rendered}
              src={featuredMedia["source_url"]}
              height="250px"
              width="250px"
            />
          )}
        </div>
        {/* Product Title */}
        <div className="p-5">
          <h4 className="text-black">{product?.title?.rendered}</h4>
        </div>

        {/* Product description */}
        <div
          className="text-black line-clamp-2 px-5"
          dangerouslySetInnerHTML={{ __html: product?.content?.rendered }}
        ></div>
      </div>
    </>
  );
};
