import { useEffect, useState } from "react";
import Layout from "../../components/layouts/aboutus-layout";
import { NormalProduct } from "../../components/Products/Fragments/NormalProductCard";
import Pagination from "../../components/UI/Pagination";
import { getIndustries, getProducts, getPVendors } from "../../utils/wordpress";

export default function NProducts({
  products,
  totalPages,
  currentPage,
  pvendors,
  industries,
}) {
  const [selectedPVendor, setSelectedPVendor] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [page, setPage] = useState(currentPage);
  const [totalPage, setTotalPage] = useState(totalPages);
  const [loading, setLoading] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    let url = `https://wp.manimirjavadi.info/wp-json/wp/v2/product?per_page=6&_embed&acf_format=standard&lang=fa&page=${page}`;

    if (selectedPVendor !== "") {
      url += `&pvendor=${selectedPVendor}`;
    }

    if (selectedIndustry !== "") {
      url += `&industry=${selectedIndustry}`;
    }

    fetch(url).then((res) => {
      for (let pair of res.headers.entries()) {
        if (pair[0] === "x-wp-totalpages") {
          setTotalPage(pair[1]);
        }
      }
      res.json().then((data) => {
        setFilteredProducts(data);
        setLoading(false);
      });
    });
  }, [selectedPVendor, selectedIndustry, page]);

  const jsxPVendors = pvendors.map((cat) => {
    return (
      <div className="flex gap-2" key={cat.id}>
        <input
          type="checkbox"
          className="form-checkbox rounded text-primary ring-0 focus:ring-0"
          onChange={(e) => {
            e.target.checked
              ? setSelectedPVendor(cat.id)
              : setSelectedPVendor("");
          }}
          checked={selectedPVendor === cat.id ? true : false}
        />
        <span className="ml-2">{cat.name}</span>
      </div>
    );
  });

  const jsxIndustries = industries.map((cat) => {
    return (
      <div className="flex gap-2" key={cat.id}>
        <input
          type="checkbox"
          className="form-checkbox rounded text-primary ring-0 focus:ring-0"
          onChange={(e) => {
            e.target.checked
              ? setSelectedIndustry(cat.id)
              : setSelectedIndustry("");
          }}
          checked={selectedIndustry === cat.id ? true : false}
        />
        <span className="ml-2">{cat.name}</span>
      </div>
    );
  });

  const jsxProducts = filteredProducts.map((p) => {
    return <NormalProduct key={p.id} product={p} />;
  });

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto px-2">
        <h3 className="text-black">محصولات صنعتی</h3>
        <div className="min-h-[500px] rounded-2xl py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* Sidebar for filtering */}
          <div className="min-h-[400px] max-h-[1000px] rounded-2xl py-3 px-4 bg-white hidden md:block shadow-lg">
            <h4 className="text-black h-[42px]">فیلتر‌ها</h4>
            {/* List */}
            <div className="mt-3 pl-4">
              {/* Categories */}
              <h6 className="text-black h-[25px] border-b border-b-gray-300">
                صنایع
              </h6>
              <div className="px-2 py-4">{jsxIndustries}</div>
            </div>

            <div className="mt-6 pl-4">
              {/* Categories */}
              <h6 className="text-black h-[25px] border-b border-b-gray-300">
                تولید‌کننده
              </h6>
              <div className="px-2 py-4">{jsxPVendors}</div>
            </div>
          </div>
          {/* Products Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 py-4 px-2 md:px-6 rounded-2xl min-h-[400px] bg-white shadow-lg overflow-hidden">
            {jsxProducts}
            {loading && (
              <div className="absolute h-[1000px] inset-0 flex justify-center items-center z-50 bg-gray-400/60 rounded-2xl">
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
            <div className="w-full col-span-full py-4">
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

NProducts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const products = await getProducts(6, 1);
  const totalPages = products.totalPages;
  const currentPage = 1;
  const pvendors = await getPVendors(100);
  const industries = await getIndustries(100);

  return {
    props: {
      products,
      totalPages,
      currentPage,
      pvendors,
      industries,
    },
    revalidate: 10,
  };
}
