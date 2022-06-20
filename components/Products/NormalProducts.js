import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductCard } from "./Fragments/ProductCard";

export const NormalProducts = () => {
  return (
    <div className="w-full h-full bg-[#89CFF0]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0.6, backgroundSize: "100% 100%", rotate: 0 }}
          whileInView={{ opacity: 1, backgroundSize: "120% 120%", rotate: 10 }}
          transition={{ duration: 20, repeat: 100, repeatType: "reverse" }}
          className="productsContainer absolute w-full h-full"
        ></motion.div>
        <div className="w-full h-full grid grid-cols-3 gap-8">
          <div className="h-[150px]"></div>
          <div className="flex justify-between col-span-3">
            <div>
              <h2>محصولات</h2>
            </div>
            <div>
              <Link href="./products">
                <span className="text-white text-lg">مشاهده همه محصولات</span>
              </Link>
            </div>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
