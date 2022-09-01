import Image from "next/image";
import Link from "next/dist/client/link";
import Layout from "../../components/layouts/aboutus-layout";
import { getProduct, getSlugs } from "../../utils/wordpress";
import { useState } from "react";
import { Chip } from "../../components/UI/Chip";

export default function SingleProduct({ product }) {
  const featuredmedia = product["_embedded"]["wp:featuredmedia"][0];
  const [selectedTab, setSelectedTab] = useState(product.acf?.grades[0] ?? "");

  const [seeFullcontent, setSeeFullContent] = useState(false);

  let jsxIndustries;
  let jsxManufacturers;
  let jsxTabs;

  const toggleFullContent = () => {
    setSeeFullContent(!seeFullcontent);
  };

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
          className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t-xl border-abl border-t border-r border-l -mb-px mx-1 ${
            g.categories === selectedTab.categories ? "" : "border-b"
          }`}
        >
          <a
            onClick={() => {
              setSelectedTab(g);
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
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 py-4 pb-[100px]">
        <div className="pl-6 pt-6 order-3 md:order-1">
          <div className="px-8 pt-6 pb-2">
            <h1 className="text-2xl text-black">{product.title.rendered}</h1>
          </div>
          {/* <div className="pr-10">
            <span className="text-abdlOrange text-lg font-bold">
              دسته‌بندی:
            </span>
            {jsxIndustries}
          </div> */}
          <div className="pr-10">
            <span className="text-abdlOrange text-lg font-bold">
              تامین‌کنندگان:
            </span>
            {jsxManufacturers}
          </div>
          <div
            className={`singleProduct px-8 pt-6 pb-2 col-span-full ${
              seeFullcontent ? "" : "line-clamp-5"
            }`}
            dangerouslySetInnerHTML={{ __html: product.content.rendered }}
          ></div>
          <div className={`px-8 pb-2 col-span-full line-clamp-5`}>
            <a
              className="text-sm text-abdlOrange cursor-pointer"
              onClick={toggleFullContent}
            >
              ادامه مطلب
            </a>
          </div>
        </div>
        <div className="relative w-full h-[300px] order-1">
          <Image
            alt={product.title.rendered}
            src={
              selectedTab.product_image
                ? selectedTab.product_image
                : featuredmedia["source_url"]
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="md:hidden relative w-full h-[300px] order-2">
          <Image
            alt={product.title.rendered}
            src={
              selectedTab.product_image
                ? selectedTab.product_image
                : featuredmedia["source_url"]
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pl-6 col-span-2 px-5 order-4">
          <div className="w-full">
            <h5>
              {product.title.rendered} <span> </span> در صنایع مرتبط
            </h5>
          </div>
          <div className="rounded w-full h-full mx-auto mt-4">
            <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b">
              {jsxTabs}
            </ul>

            <div id="tab-contents">
              <div className="p-4 overflow-x-scroll scrollbar-thin scrollbar-track-abdlOrange scrollbar-thumb-gray-500">
                <table className="w-full border-collapse">
                  <thead className="h-[60px]">
                    <tr className="border-b">
                      <th className="text-lg">
                        <span> گرید‌ها</span>
                        {/* <span className="text-abdlOrange">
                          {selectedTab.categories}
                        </span> */}
                      </th>
                      <th className="text-lg">
                        <span> کاربرد‌ها</span>
                        {/* <span className="text-abdlOrange">
                          {selectedTab.categories}
                        </span> */}
                      </th>
                      {/* <th className="text-lg">
                        <span> مواد تشکیل‌دهنده</span>
                        <span className="text-abdlOrange">
                          {selectedTab.categories}
                        </span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        {selectedTab.grades &&
                          selectedTab?.grades?.map((g) => {
                            return (
                              <span key={g.theGrade} className="text-lg">
                                <Chip
                                  className="bg-abdlOrange text-white border-abdlOrange hover:bg-white hover:text-abdlOrange duration-100"
                                  color="abdlOrange"
                                  text="abdlOrange"
                                >
                                  {g.theGrade}
                                </Chip>
                              </span>
                            );
                          })}
                      </td>
                      <td className="text-center">
                        {selectedTab.applications &&
                          selectedTab?.applications?.map((a) => {
                            return (
                              <span key={a.application} className="text-lg">
                                <Chip
                                  className="bg-abdlBlue text-white hover:bg-white hover:text-abdlBlue border-abdlBlue duration-100"
                                  color="abdlBlue"
                                  text="abdlBlue"
                                >
                                  {a.application}
                                </Chip>
                              </span>
                            );
                          })}
                      </td>
                      {/* <td className="text-center">
                        {selectedTab.ingredients &&
                          selectedTab?.ingredients?.map((i) => {
                            return (
                              <span key={i.ingredient} className="text-lg">
                                <Chip
                                  className="bg-black text-white border-black hover:bg-white hover:text-black duration-100"
                                  color="myBlack"
                                  text="myBlack"
                                >
                                  {i.ingredient}
                                </Chip>
                              </span>
                            );
                          })}
                      </td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
