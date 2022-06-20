import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const videoVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const Video = ({ animatorController }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (animatorController) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [animatorController, controls]);
  return (
    <div id="video" className="video-container w-full h-full bg-black">
      <motion.div
        variants={videoVariant}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <video loop autoPlay className="min-h-full min-w-full">
          <source src="theVideo.mp4" type="video/mp4" />
          متاسفانه مرورگر شما از این ویدیو پشتیبانی نمی‌کند.
        </video>
      </motion.div>
    </div>
  );
};
