import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/english-layout";
import { SproductCard } from "../../components/Products/Fragments/SproductCard";
import { getCosmeticCategories, getCosmetics } from "../../utils/wordpress";
import Pagination from "../../components/UI/Pagination";

export default function SProducts({
  cosmetics,
  totalPages,
  currentPage,
  categories,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(currentPage);
  const [totalPage, setTotalPage] = useState(totalPages);
  const [loading, setLoading] = useState(false);

  const [filteredCosmetics, setFilteredCosmetics] = useState(cosmetics);

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    let url = `https://wp.manimirjavadi.info/wp-json/wp/v2/cosmetics?per_page=6&_embed&acf_format=standard&lang=fa&page=${page}`;

    if (selectedCategory !== "") {
      url += `&cosmetic_categories=${selectedCategory}`;
    }

    fetch(url).then((res) => {
      for (let pair of res.headers.entries()) {
        if (pair[0] === "x-wp-totalpages") {
          setTotalPage(pair[1]);
        }
      }
      res.json().then((data) => {
        setFilteredCosmetics(data);
        setLoading(false);
      });
    });
  }, [selectedCategory, page]);

  const jsxCosmetics = filteredCosmetics.map((cosmetic) => {
    return (
      <div key={cosmetic.id}>
        <SproductCard cosmetic={cosmetic} />
      </div>
    );
  });

  const jsxCategories = categories.map((cat) => {
    return (
      <div className="flex" key={cat.id}>
        <input
          type="checkbox"
          className="form-checkbox rounded text-primary ring-0 focus:ring-0"
          onChange={(e) => {
            e.target.checked
              ? setSelectedCategory(cat.id)
              : setSelectedCategory("");
          }}
          checked={selectedCategory === cat.id ? true : false}
        />
        <span className="ml-2">{cat.name}</span>
      </div>
    );
  });
  return (
    <main className="w-full" dir="ltr">
      <div className="max-w-5xl mx-auto px-2">
        <h3 className="text-black">Cosmetic Products</h3>
        <div className="min-h-[500px] rounded-2xl py-6 px-4 grid grid-cols-2 md:grid-cols-4">
          {/* Sidebar for filtering */}
          <div className="min-h-[400px] max-h-[1000px] rounded-2xl py-3 px-4 border bg-white border-gray-300 hidden md:block">
            <h4 className="text-black h-[42px] border-b border-b-gray-300">
              Filters
            </h4>
            {/* List */}
            <div className="mt-6 pl-4">
              {/* Categories */}
              <h6 className="text-black h-[25px] border-b border-b-gray-300">
                Categories
              </h6>
              <div className="px-2 py-4">{jsxCategories}</div>
            </div>
          </div>
          {/* Products Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-6">
            {jsxCosmetics}
            {loading && (
              <div className="absolute h-[2000px] inset-0 flex justify-center items-center z-50 bg-gray-400/60 rounded-2xl">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="8.042%"
                      y1="0%"
                      x2="65.682%"
                      y2="23.865%"
                      id="a"
                    >
                      <stop stopColor="#D98C00" stopOpacity="0" offset="0%" />
                      <stop
                        stopColor="#D98C00"
                        stopOpacity=".631"
                        offset="63.146%"
                      />
                      <stop stopColor="#D98C00" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)">
                      <path
                        d="M36 18c0-9.94-8.06-18-18-18"
                        id="Oval-2"
                        stroke="url(#a)"
                        strokeWidth="2"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="0.9s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <circle fill="#0B5C00" cx="36" cy="18" r="1">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="0.9s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  </g>
                </svg>
              </div>
            )}
            <div className="w-full col-span-full">
              <Pagination
                totalPages={+totalPage}
                currentPage={page.toString()}
                onPageClick={handlePage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

SProducts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const cosmetics = await getCosmetics(6, 1);
  const totalPages = cosmetics.totalPages;
  const currentPage = 1;
  const categories = await getCosmeticCategories(100);

  return {
    props: {
      cosmetics,
      totalPages,
      currentPage,
      categories,
    },
    revalidate: 10,
  };
}
