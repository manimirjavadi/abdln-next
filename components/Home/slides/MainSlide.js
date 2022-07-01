import React, { useEffect } from "react";
import Image from "next/dist/client/image";
import { motion, useAnimation } from "framer-motion";
import topGif from "../../../assets/images/top.gif";

const textVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.01,
    },
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
    transition: {
      duration: 0.01,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const MainSlide = ({ animatorController, text, title }) => {
  const controlsText = useAnimation();
  const controlsGif = useAnimation();

  useEffect(() => {
    if (animatorController) {
      controlsText.start("visible");
      controlsGif.start("visible");
    } else {
      controlsText.start("hidden");
      controlsGif.start("hidden");
    }
  }, [animatorController, controlsText, controlsGif]);

  return (
    <>
      <div id="main" className="w-full h-full bg-abdlBlue">
        <div className="max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center">
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate={controlsText}
            transition={{ duration: 0.7, type: "spring" }}
            className="md:w-[80%] px-6 order-2 md:order-1 md:pr-4"
          >
            <h1>{title.rendered}</h1>
            <div
              className="slideDIV"
              dangerouslySetInnerHTML={{ __html: text.rendered }}
            ></div>
          </motion.div>
          <motion.div
            variants={gifVariant}
            initial="hidden"
            animate={controlsGif}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="order-1"
          >
            <div className="w-full h-full">
              <Image
                priority
                src={topGif}
                alt={title.rendered}
                layout="responsive"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
