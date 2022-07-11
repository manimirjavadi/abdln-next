import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SproductCard } from "./Fragments/SproductCard";
import useWindowDimensions from "../../hooks/WindowsDimension";

export const SpecialProducts = ({ products }) => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="w-full h-full bg-[#D98C00]" dir="ltr">
      <motion.div
        initial={{ backgroundSize: "100% 100%" }}
        whileInView={{ backgroundSize: "120% 120%" }}
        transition={{ duration: 20, repeat: 100, repeatType: "reverse" }}
        className="productsContainer max-w-6xl mx-auto w-full"
      >
        <div className="w-full h-full px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[150px]"></div>
          <div className="flex justify-between md:col-span-3">
            <Link href="/sproducts/list">
              <span className="text-white text-lg cursor-pointer font-bold">
                همه محصولات
              </span>
            </Link>
            <div>
              <span className="text-3xl font-bold text-white">
                محصولات آرایشی
              </span>
            </div>
          </div>
          <SproductCard cosmetic={products[0]} />
          {width > 768 && <SproductCard cosmetic={products[1]} />}
        </div>
      </motion.div>
    </div>
  );
};
