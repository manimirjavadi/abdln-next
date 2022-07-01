import React from "react";
import Layout from "../../../components/layouts/aboutus-layout";
import Image from "next/dist/client/image";
import { NewsCard } from "../../../components/News/Fragments/NewsCard";
import Link from "next/link";
import { getPages, getPosts } from "../../../utils/wordpress";
import Pagination from "../../../components/UI/Pagination";
import { useRouter } from "next/router";

export default function List({ banners, posts, totalPages, currentPage }) {
  const router = useRouter();
  const jsxNews = posts.map((post) => {
    return (
      <Link key={post.id} href={"/news/something"}>
        <div>
          <NewsCard theNews={post} />
        </div>
      </Link>
    );
  });

  const firstBanner = banners[0] ?? [];
  const secondBanner = banners[1] ?? [];
  const thirdBanner = banners[2] ?? [];

  const featuredMedia1 = firstBanner["_embedded"]["wp:featuredmedia"][0];
  const featuredMedia2 = secondBanner["_embedded"]["wp:featuredmedia"][0];
  const featuredMedia3 = thirdBanner["_embedded"]["wp:featuredmedia"][0];

  const handlePage = (e) => {
    router.push(`/news/${e.target.value}`);
  };

  return (
    <main dir="rtl" className="h-full w-full">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-black">اخبار</h2>
        <div className="h-[4px] w-[65px] bg-abdlOrange mt-2"></div>
        {/* Banner */}
        <div className="min-h-[400px] w-full md:grid grid-cols-5 mt-4 hidden">
          {/* Main Card */}
          <Link href={"/news/firstSlide"}>
            <div className="h-full w-full col-span-3 relative cursor-pointer rounded-r-3xl overflow-hidden">
              <Image
                className="hover:blur-sm duration-200"
                alt="عبدالهیان"
                src={featuredMedia1["source_url"]}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-[10px] text-abdlOrange font-bold text-3xl px-4">
                {firstBanner.title.rendered}
              </div>
            </div>
          </Link>
          <div className="grid col-span-2 grid-rows-2">
            <div className="row-span-1">
              {/* New Card  TODO: Links */}
              <Link href={"/news/firstSlide"}>
                <div className="h-full w-full relative cursor-pointer rounded-tl-3xl overflow-hidden">
                  <Image
                    className="hover:blur-sm duration-200"
                    alt="عبدالهیان"
                    src={featuredMedia2["source_url"]}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-[10px] text-abdlOrange font-bold text-3xl px-4">
                    {secondBanner.title.rendered}
                  </div>
                </div>
              </Link>
            </div>
            <div className="row-span-1">
              {/* New Card */}
              <Link href={"/news/firstSlide"}>
                <div className="h-full w-full relative cursor-pointer rounded-bl-3xl overflow-hidden">
                  <Image
                    className="hover:blur-sm duration-200"
                    alt="عبدالهیان"
                    src={featuredMedia3["source_url"]}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-[10px] text-abdlOrange font-bold text-3xl px-4">
                    {thirdBanner.title.rendered}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-5xl mx-auto mt-8 w-full">
        <div className="min-h-[500px] mb-6 bg-white/50 rounded-3xl px-16 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {jsxNews}
          </div>
        </div>
        {/* Pagination */}
        <Pagination
          className="mb-4"
          totalPages={totalPages}
          currentPage={currentPage}
          onPageClick={handlePage}
        />
      </div>
    </main>
  );
}

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = await getPages("posts");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const banners = await getPosts(3);
  const posts = await getPosts(3, params.page);
  const totalPages = posts.totalPages;
  const currentPage = params.page;

  return {
    props: {
      banners,
      posts,
      totalPages,
      currentPage,
    },
    revalidate: 10,
  };
}
