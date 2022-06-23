import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const NewsCard = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="px-6 cursor-pointer">
      <div className="newsCard relative">
        {/* News Title */}
        <div className="p-5">
          <h4 className="text-black">خاک دیاتومه</h4>
        </div>

        {/* Product Image */}
        <div className="p-5 w-full h-full">
          <Image
            alt="خاک دیاتومه"
            src="/tempImgs/newback.jpg"
            height="100%"
            width="100%"
            layout="fill"
            objectFit="cover"
          />
          {/* Product description */}
          <div className="absolute bottom-[-14px] right-[-10px] w-[110%] h-24 bg-white blur-lg" />
          <div className="absolute w-full bottom-0 right-0 px-2 pb-3">
            <p className="text-black font-bold w-full line-clamp-2">
              خاک دیاتومه (Diatomaceous earth) از بقایای نوعی جلبک تک‌سلولی به
              نام دیاتوم به‌دست‌آمده است. دیاتوم‌ها گروهی از جلبک‌های کوچک هستند
              که در اقیانوس‌ها، آبراه‌ها و خاک‌های سراسر جهان یافت می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
