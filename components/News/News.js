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
                <span className="text-white text-3xl font-bold">اخبار</span>
              </div>
              <div className="cursor-pointer">
                <Link href="./news/list/1">
                  <span className="text-white text-lg">مشاهده همه خبر‌ها</span>
                </Link>
              </div>
            </div>
            {posts.length && (
              <Link className="cursor-pointer" href={`/news/${posts[0].slug}`}>
                <div>
                  <NewsCard theNews={posts[0]} />
                </div>
              </Link>
            )}
            {width > 768 && posts.length && (
              <Link className="cursor-pointer" href={`/news/${posts[1].slug}`}>
                <div>
                  <NewsCard theNews={posts[1]} />
                </div>
              </Link>
            )}
            {width > 768 && posts.length && (
              <Link className="cursor-pointer" href={`/news/${posts[2].slug}`}>
                <div>
                  <NewsCard theNews={posts[2]} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
