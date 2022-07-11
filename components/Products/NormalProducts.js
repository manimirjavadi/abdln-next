import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NormalProduct } from "./Fragments/NormalProductCard";
import useWindowDimensions from "../../hooks/WindowsDimension";

export const NormalProducts = ({ products }) => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="w-full h-full bg-[#000957]">
      <motion.div
        initial={{ backgroundSize: "100% 100%" }}
        whileInView={{ backgroundSize: "120% 120%" }}
        transition={{ duration: 20, repeat: 100, repeatType: "reverse" }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="w-full h-full px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-[150px]"></div>
          <div className="flex justify-between md:col-span-3">
            <div>
              <span className="text-3xl font-bold text-white">
                محصولات صنعتی
              </span>
            </div>
            <div>
              <Link href="/nproducts/list">
                <span className="text-white text-lg cursor-pointer font-bold">
                  همه محصولات
                </span>
              </Link>
            </div>
          </div>
          <NormalProduct product={products[0]} />
          {width > 768 && <NormalProduct product={products[1]} />}
          {width > 768 && <NormalProduct product={products[2]} />}
        </div>
      </motion.div>
    </div>
  );
};
