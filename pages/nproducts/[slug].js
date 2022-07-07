import Image from "next/image";
import Link from "next/dist/client/link";
import Layout from "../../components/layouts/aboutus-layout";
import { getProduct, getSlugs } from "../../utils/wordpress";

export default function SingleProduct({ product }) {
  const featuredmedia = product["_embedded"]["wp:featuredmedia"][0];
  let jsxIndustries;
  let jsxManufacturers;

  if (product.acf.industries) {
    jsxIndustries = product.acf?.industries?.map((ind) => {
      return <div key={ind.term_id}>{ind.name}</div>;
    });
  }

  if (product.acf.manufacturers) {
    jsxManufacturers = product.acf?.vendor?.map((m) => {
      return (
        <Link key={m.ID} href={`/manufacturers/${m.post_name}`}>
          <div className="cursor-pointer">{m.post_title}</div>
        </Link>
      );
    });
  }

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <div className="relative w-full h-[300px]">
          <Image
            alt={product.title.rendered}
            src={featuredmedia["source_url"]}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <div className="px-8 pt-6 pb-2">
            <h1 className="text-2xl text-black">{product.title.rendered}</h1>
          </div>
          <div className="pt-10">
            <span className="text-abdlOrange mt-10 text-lg font-bold">
              دسته‌بندی:
            </span>
            <div className="mt-2">{jsxIndustries}</div>
          </div>
          <div className="pt-10">
            <span className="text-abdlOrange mt-10 text-lg font-bold">
              تامین‌کنندگان:
            </span>
            <div className="mt-2">{jsxManufacturers}</div>
          </div>
        </div>
        <div
          className="singleProduct px-8 pt-6 pb-2 col-span-full"
          dangerouslySetInnerHTML={{ __html: product.content.rendered }}
        ></div>
      </div>

      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mt-10">
        <div className="relative w-full h-[300px]"></div>
      </div>
    </main>
  );
}

SingleProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = await getSlugs("products");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}
