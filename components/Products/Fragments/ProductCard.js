import Image from "next/image";
import React from "react";

export const ProductCard = () => {
  return (
    <>
      <div className="productCard">
        {/* Product Title */}
        <div className="p-5">
          <h4 className="text-black">خاک دیاتومه</h4>
        </div>

        {/* Product description */}
        <div className="px-5">
          <p className="text-black line-clamp-2">
            خاک دیاتومه (Diatomaceous earth) از بقایای نوعی جلبک تک‌سلولی به نام
            دیاتوم به‌دست‌آمده است. دیاتوم‌ها گروهی از جلبک‌های کوچک هستند که در
            اقیانوس‌ها، آبراه‌ها و خاک‌های سراسر جهان یافت می‌شوند.
          </p>
        </div>

        {/* Product Image */}
        <div className="p-5 w-full flex justify-center">
          <Image
            alt="خاک دیاتومه"
            src="/tempImgs/hudson.jpg"
            height="250px"
            width="250px"
          />
        </div>
      </div>
    </>
  );
};
