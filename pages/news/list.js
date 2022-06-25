import React from "react";
import Layout from "../../components/layouts/aboutus-layout";
import Image from "next/dist/client/image";
import { NewsCard } from "../../components/News/Fragments/NewsCard";

export default function List() {
  return (
    <main dir="rtl" className="h-full w-full">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-black">اخبار</h2>
        <div className="h-[4px] w-[65px] bg-abdlOrange mt-2"></div>
        {/* Banner */}
        <div className="min-h-[400px] w-full grid grid-cols-5 mt-4">
          <div className="grid col-span-2 grid-rows-2">
            <div className="row-span-1">
              {/* New Card */}
              <div className="h-full w-full relative cursor-pointer rounded-tr-3xl overflow-hidden">
                <Image
                  className="hover:blur-sm duration-200"
                  alt="عبدالهیان"
                  src="/tempImgs/newback.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-[10px] text-white font-bold text-3xl px-4">
                  تیتر یک خبر بسیار مهم آزمایشی
                </div>
              </div>
            </div>
            <div className="row-span-1">
              {/* New Card */}
              <div className="h-full w-full relative cursor-pointer rounded-br-3xl overflow-hidden">
                <Image
                  className="hover:blur-sm duration-200"
                  alt="عبدالهیان"
                  src="/tempImgs/ane.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-[10px] text-white font-bold text-3xl px-4">
                  تیتر یک خبر بسیار مهم آزمایشی
                </div>
              </div>
            </div>
          </div>
          {/* Main Card */}
          <div className="h-full w-full col-span-3 relative cursor-pointer rounded-l-3xl overflow-hidden">
            <Image
              className="hover:blur-sm duration-200"
              alt="عبدالهیان"
              src="/tempImgs/4.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-[10px] text-white font-bold text-3xl px-4">
              تیتر یک خبر بسیار مهم آزمایشی
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-5xl mx-auto mt-8 w-full">
        <div className="min-h-[500px] mb-6 bg-white/50 rounded-3xl px-16 py-4">
          <div className="grid grid-cols-3 gap-6 mt-6">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </main>
  );
}

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
