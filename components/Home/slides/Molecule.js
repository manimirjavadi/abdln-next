import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import theImage from "../../../assets/images/Molecule.png";

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

export const Molecule = () => {
  return (
    <div className="w-full h-full bg-abdlOrange">
      <div className="max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center gap-8">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="px-6 order-1 md:order-2 md:pr-4"
        >
          <div className="scene w-full h-full">
            <Image
              priority
              src={theImage}
              alt="عبداللهیان"
              layout="responsive"
            />
          </div>
        </motion.div>
        <motion.div
          variants={gifVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="md:w-[80%] order-2"
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
      </div>
    </div>
  );
};
