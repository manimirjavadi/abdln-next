import React from "react";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
import topGif from "../../../assets/images/top.gif";

const textVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const gifVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const MainSlide = () => {
  return (
    <div className="w-full h-full bg-abdlBlue">
      <div className="max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="md:w-[80%] px-6 order-2 md:order-1 md:pr-4"
        >
          <h1>عبداللهیان</h1>
          <p className="mt-6 text-justify">
            لورم ایپسوم به معنای یه چیزی هست که نمی‌دانم. اما می‌دانم که این
            چیزا چیز هستن. به امید خدا در حال نوشتن یه خزعبلاتیم تا اینجا رو پر
            کنم. اهمیت پر کردن برای داشتن یک ادیت زیباست. اما هرچقدر می‌نویسم به
            نظر کافی نیست. انشاءالله که بالاخره کافی باشد تا بتوانیم به تست بهتر
            اپلیکیشن بپردازیم. امید است این روند سریع‌تر به اتمام برسد تا ما
            روند تولید اپلیکیشن را افزایش بدهیم.
          </p>
        </motion.div>
        <motion.div
          variants={gifVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="order-1"
        >
          <div className="w-full h-full">
            <Image priority src={topGif} alt="عبداللهیان" layout="responsive" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
