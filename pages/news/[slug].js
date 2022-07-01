import Image from "next/image";
import Layout from "../../components/layouts/aboutus-layout";
import { getPost, getSlugs } from "../../utils/wordpress";

export default function SingleNews({ post }) {
  const featuredmedia = post["_embedded"]["wp:featuredmedia"][0];
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl">
        <div className="px-8 pt-6 pb-2">
          <h1 className="text-xl text-black">{post.title.rendered}</h1>
          {/* <span className="text-gray-400">زیر تیتر این خبر مهم</span> */}
        </div>
        <div className="mx-auto relative h-96">
          <Image
            alt="عبدالهیان"
            src={featuredmedia["source_url"]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="newsContainer pt-5 pb-16 px-4 md:px-16"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    </main>
  );
}

SingleNews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
