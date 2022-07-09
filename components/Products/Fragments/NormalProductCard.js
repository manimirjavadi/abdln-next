import Image from "next/image";
import React from "react";
import Link from "next/dist/client/link";

export const NormalProduct = ({ product }) => {
  let featuredMedia;
  if (product) {
    featuredMedia = product["_embedded"]["wp:featuredmedia"][0];
  }

  return (
    <Link href={`/nproducts/${product.slug}`}>
      <div className="NormalProductCard shadow-lg hover:shadow-2xl duration-300 cursor-pointer">
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
          <h6 className="text-black">{product?.title?.rendered}</h6>
        </div>
      </div>
    </Link>
  );
};
