import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const NewsCard = () => {
  return (
    <div className="cursor-pointer">
      <div className="newsCard h-full relative">
        {/* News Title */}
        <div className="p-5">
          <h4 className="text-black">خاک دیاتومه</h4>
        </div>

        {/* Product Image */}
        <div className="p-5 w-full h-full">
          <Image
            className="hover:blur-sm duration-200 shadow-lg"
            alt="خاک دیاتومه"
            src="/tempImgs/4.jpg"
            height="100%"
            width="100%"
            layout="fill"
            objectFit="cover"
          />
          {/* Product description */}
          <div className="absolute bottom-[-14px] right-[-10px] w-[110%] h-32 bg-white blur-lg" />
          <div className="absolute w-full bottom-0 right-0 px-2 pb-3">
            <p className="text-black text-xl font-bold w-full line-clamp-3">
              خاک دیاتومه (Diatomaceous earth) از بقایای نوعی جلبک تک‌سلولی به
              نام دیاتوم به‌دست‌آمده است. دیاتوم‌ها گروهی از جلبک‌های کوچک هستند
              که در اقیانوس‌ها، آبراه‌ها و خاک‌های سراسر جهان یافت می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
