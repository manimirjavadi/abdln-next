import React from "react";
import Layout from "../../components/layouts/english-layout";
import { SproductCard } from "../../components/Products/Fragments/SproductCard";

export default function SProducts() {
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
              <div className="px-2 py-4">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Innovative ActiveS</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">ActiveS</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Herbal Extracts</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">UV Filters</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Carbomers</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Solubilizers</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Treated Pigments</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Hair Dyes</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Dyes</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Texturing Agents</span>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-primary ring-0 focus:ring-0"
                  />
                  <span className="ml-2">Pigments</span>
                </div>
              </div>
            </div>
          </div>
          {/* Products Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-6">
            <SproductCard />
            <SproductCard />
            <SproductCard />
            <SproductCard />
            <SproductCard />
            <SproductCard />
          </div>
        </div>
      </div>
    </main>
  );
}

SProducts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
