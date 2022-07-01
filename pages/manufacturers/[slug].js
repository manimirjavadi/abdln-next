import Image from "next/image";
import Layout from "../../components/layouts/aboutus-layout";
import { getSlugs, getVendor } from "../../utils/wordpress";

export default function SingleManufacturer(vendor) {
  const featuredmedia = vendor.vendor["_embedded"]["wp:featuredmedia"][0];

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="mx-auto relative h-60 w-60">
          <Image
            alt="عبدالهیان"
            src={featuredmedia["source_url"]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-8 pt-6 pb-2">
          <h1 className="text-xl text-center text-black">نام تامین‌کننده</h1>
        </div>
        <div
          className="newsContainer pt-5 pb-16 px-4 md:px-16"
          dangerouslySetInnerHTML={{ __html: vendor.vendor.content.rendered }}
        ></div>
      </div>
    </main>
  );
}

SingleManufacturer.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = await getSlugs("vendors");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const vendor = await getVendor(params.slug);

  return {
    props: {
      vendor,
    },
    revalidate: 10,
  };
}
