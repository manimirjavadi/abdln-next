import Image from "next/image";
import Link from "next/dist/client/link";
import Layout from "../../components/layouts/aboutus-layout";
import { getProduct, getSlugs } from "../../utils/wordpress";
import { useState } from "react";

export default function SingleProduct({ product }) {
  const featuredmedia = product["_embedded"]["wp:featuredmedia"][0];
  const [selectedTab, setSelectedTab] = useState(product.acf?.grades[0] ?? "");

  let jsxIndustries;
  let jsxManufacturers;
  let jsxTabs;

  if (product.acf.industries) {
    jsxIndustries = product.acf?.industries?.map((ind) => {
      return <span key={ind.term_id}> {ind.name}،</span>;
    });
  }

  if (product.acf.vendor) {
    jsxManufacturers = product.acf?.vendor?.map((m) => {
      return (
        <Link key={m.ID} href={`/manufacturers/${m.post_name}`}>
          <span className="cursor-pointer">{m.post_title}، </span>
        </Link>
      );
    });
  }

  if (product.acf.grades) {
    jsxTabs = product.acf?.grades?.map((g) => {
      return (
        <li
          key={g.categories}
          className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            g.categories === selectedTab.categories ? "" : "border-b"
          }`}
        >
          <a
            onClick={() => {
              setSelectedTab(g);
              console.log(g);
            }}
            className={`cursor-pointer ${
              g.categories === selectedTab.categories
                ? "text-abdlOrange"
                : "text-abdlBlue"
            }`}
            id="default-tab"
          >
            {g.categories}
          </a>
        </li>
      );
    });
  }

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <div>
          <div className="px-8 pt-6 pb-2">
            <h1 className="text-2xl text-black">{product.title.rendered}</h1>
          </div>
          <div className="pr-10">
            <span className="text-abdlOrange text-lg font-bold">
              دسته‌بندی:
            </span>
            {jsxIndustries}
          </div>
          <div className="pr-10">
            <span className="text-abdlOrange text-lg font-bold">
              تامین‌کنندگان:
            </span>
            {jsxManufacturers}
          </div>
          <div className="relative w-full h-[300px]">
            <Image
              alt={product.title.rendered}
              src={featuredmedia["source_url"]}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="pl-6">
          <div className="w-full">
            <h5>
              {product.title.rendered} <span> </span> در دیگر صنایع
            </h5>
          </div>
          <div className="rounded border w-full h-full mx-auto mt-4">
            <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b">
              {jsxTabs}
            </ul>

            <div id="tab-contents">
              <div className="p-4">
                <table className="w-full">
                  <thead className="h-[60px]">
                    <tr>
                      <th className="text-xl">
                        <span> گرید‌ها در صنعت </span>
                        <span className="text-abdlOrange">
                          {selectedTab.categories}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTab?.grades?.map((g) => {
                      return (
                        <tr key={g.theGrade} className="text-center">
                          <td className="text-lg">{g.theGrade}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="singleProduct px-8 pt-6 pb-2 col-span-full"
          dangerouslySetInnerHTML={{ __html: product.content.rendered }}
        ></div>
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
