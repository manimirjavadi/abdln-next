import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import theImage from "../../../assets/images/Molecule.png";

const textVariant = {
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

const gifVariant = {
  hidden: {
    opacity: 0,
    rotate: 0,
    x: "100vw",
    transition: {
      duration: 0.01,
    },
  },
  zoom: {
    scale: 1.3,
    transition: {
      repeat: 100,
      repeatType: "reverse",
      duration: 15,
    },
  },
  rotate: {
    rotate: 30,
    transition: {
      repeat: 100,
      repeatType: "reverse",
      duration: 30,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const Molecule = ({ animatorController, text, title }) => {
  const controlsText = useAnimation();
  const controlsGif = useAnimation();

  useEffect(() => {
    if (animatorController) {
      controlsText.start("visible");
      controlsGif.start("visible").then(() => {
        controlsGif.start("zoom");
        controlsGif.start("rotate");
      });
    } else {
      controlsText.start("hidden");
      controlsGif.start("hidden");
    }
  }, [animatorController, controlsText, controlsGif]);

  return (
    <div id="molecule" className="w-full h-full bg-abdlOrange">
      <div className="max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center gap-8">
        <motion.div
          variants={gifVariant}
          initial="hidden"
          animate={controlsGif}
          transition={{ duration: 0.7, type: "spring" }}
          className="px-6 order-1 md:order-2 md:pr-4"
        >
          <div className="scene w-full h-full">
            <Image
              priority
              src={theImage}
              alt={title.rendered}
              layout="responsive"
            />
          </div>
        </motion.div>
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate={controlsText}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="md:w-[80%] px-6 order-2 md:pr-4"
        >
          <h1>{title.rendered}</h1>
          <div
            className="slideDIV"
            dangerouslySetInnerHTML={{ __html: text.rendered }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};
