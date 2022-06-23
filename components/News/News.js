import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { NewsCard } from "./Fragments/NewsCard";

export const News = () => {
  return (
    <>
      <div className="w-full h-full bg-abdlBlue">
        <div className="max-w-6xl mx-auto w-full">
          <div className="w-full h-full grid grid-cols-3 gap-8">
            <div className="h-[150px]"></div>
            <div className="flex justify-between col-span-3">
              <div>
                <h2 className="text-white">اخبار</h2>
              </div>
              <div className="cursor-pointer">
                <Link href="./products">
                  <span className="text-white text-lg">مشاهده همه خبر‌ها</span>
                </Link>
              </div>
            </div>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
};
