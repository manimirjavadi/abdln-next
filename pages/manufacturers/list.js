import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layouts/aboutus-layout";
import { getVendors } from "../../utils/wordpress";

export default function List({ vendors }) {
  const jsxVendors = vendors.map((vendor) => {
    let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];

    return (
      <div key={vendor.id}>
        <Link href="/manufacturers/test">
          <div className="h-32 w-full relative cursor-pointer hover:scale-105 duration-200">
            <Image
              src={featuredMedia["source_url"]}
              layout="fill"
              objectFit="cover"
              alt="عبدالهیان"
            />
          </div>
        </Link>
      </div>
    );
  });

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl py-10 px-4 md:px-8">
        <h2 className="text-black">تامین کنندگان</h2>
        <div className="grid grid-cols-2 md:grid-cols-4">{jsxVendors}</div>
      </div>
    </main>
  );
}

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const vendors = await getVendors(100);

  return {
    props: {
      vendors,
    },
    revalidate: 10,
  };
}
