import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import useWindowDimensions from "../../hooks/WindowsDimension";
import { VendorLogo } from "./Fragments/VendorLogo";

const topListVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      delay: 1,
      duration: 0.01,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const bottomListVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      delay: 1,
      duration: 0.01,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
    },
  },
};

export const ManufacturersSection = ({ animatorController, vendors }) => {
  const controlAnimation = useAnimation();
  const { height, width } = useWindowDimensions();

  const jsxMobile = vendors.map((vendor) => {
    let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];

    return (
      <div key={vendor.id}>
        <Link href={`/manufacturers/${vendor.slug}`} className="cursor-pointer">
          <VendorLogo source={featuredMedia["source_url"]} />
        </Link>
      </div>
    );
  });

  const jsxDesktopTop = vendors.slice(0, 4).map((vendor) => {
    let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];

    return (
      <Link
        key={vendor.id}
        href={`/manufacturers/${vendor.slug}`}
        className="cursor-pointer"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            alt="عبدالهیان"
            src={featuredMedia["source_url"]}
            height="200px"
            width="200px"
            objectFit="contain"
          />
        </motion.div>
      </Link>
    );
  });

  const jsxDesktopBottom = vendors.slice(4, 8).map((vendor) => {
    let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];

    return (
      <Link
        key={vendor.id}
        href={`/manufacturers/${vendor.slug}`}
        className="cursor-pointer"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            alt="عبدالهیان"
            src={featuredMedia["source_url"]}
            height="200px"
            width="200px"
            objectFit="contain"
          />
        </motion.div>
      </Link>
    );
  });

  useEffect(() => {
    if (animatorController) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [animatorController, controlAnimation]);

  return (
    <div className="w-full h-full bg-abdlOrange">
      <div className="max-w-5xl mx-auto w-full manufacturerContainer">
        <motion.div
          className="w-full h-full gap-8 px-10 md:px-0"
          style={{ zIndex: 20 }}
        >
          <div className="h-[150px] hidden md:block"></div>
          {/* Mobile View */}
          {width <= 768 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-24 md:hidden">
              {jsxMobile}
            </div>
          )}

          {/* Desktop View */}
          <div className="pt-6 hidden md:block">
            <motion.div
              variants={topListVariant}
              initial="hidden"
              animate={controlAnimation}
              className="w-full md:flex justify-between items-center"
            >
              <div className="w-96 hidden md:block">
                <h1>تامین‌کنندگان</h1>
              </div>
              <div className="w-full">
                <div className="h-[170px] bg-white rounded-[200px] overflow-hidden">
                  <div className="w-full grid grid-cols-4 place-items-center">
                    {jsxDesktopTop}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={bottomListVariant}
              initial="hidden"
              animate={controlAnimation}
              className="w-full md:flex justify-between items-center mt-16"
            >
              <div className="w-full overflow-hidden">
                <div className="h-[170px] bg-white rounded-[200px] overflow-hidden">
                  <div className="w-full grid grid-cols-4 place-items-center">
                    {jsxDesktopBottom}
                  </div>
                </div>
              </div>
              <div className="w-96 flex justify-end">
                <Link href="./manufacturers/list">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-lg justify-end cursor-pointer hidden md:flex"
                  >
                    همه تامین‌کنندگان
                    <span className="px-4 mt-2">
                      <svg
                        width="44"
                        height="17"
                        viewBox="0 0 44 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.00158691L0 8.00159L8 16.0016V10.0016H44V6.00159H8V0.00158691Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
