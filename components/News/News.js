import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { NewsCard } from "./Fragments/NewsCard";
import useWindowDimensions from "../../hooks/WindowsDimension";

export const News = ({ posts }) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className="w-full h-full bg-abdlBlue">
        <div className="max-w-6xl mx-auto w-full">
          <div className="w-full h-full px-12 grid grid-cols-1 md:grid-cols-3 lg:gap-8">
            <div className="h-[150px]"></div>
            <div className="flex justify-between col-span-3">
              <div>
                <h2 className="text-white">اخبار</h2>
              </div>
              <div className="cursor-pointer">
                <Link href="./news/list/1">
                  <span className="text-white text-lg">مشاهده همه خبر‌ها</span>
                </Link>
              </div>
            </div>
            {posts.length && <NewsCard theNews={posts[0]} />}
            {width > 768 && posts.length && <NewsCard theNews={posts[1]} />}
            {width > 768 && posts.length && <NewsCard theNews={posts[2]} />}
          </div>
        </div>
      </div>
    </>
  );
};
