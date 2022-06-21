import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ManufacturersSection = () => {
  return (
    <div className="w-full h-full bg-abdlOrange">
      <div className="max-w-5xl mx-auto w-full">
        <div className="w-full h-full gap-8" style={{ zIndex: 20 }}>
          <div className="h-[150px]"></div>
          <div className="pt-6">
            <div className="w-full md:flex justify-between items-center">
              <div className="w-96">
                <h1>تامین‌کنندگان</h1>
              </div>
              <div className="w-full">
                <div className="h-[170px] bg-white rounded-[200px] overflow-hidden">
                  <div className="w-full grid grid-cols-4 place-items-center">
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/celito.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/celotech.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/cemotech.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/fenghung.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:flex justify-between items-center mt-16">
              <div className="w-full overflow-hidden">
                <div className="h-[200px] bg-white rounded-[200px] overflow-hidden">
                  <div className="w-full grid grid-cols-4 place-items-center">
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/imerys.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/sh1.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/SHHxtc.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                    <Image
                      alt="عبداللهیان"
                      src="/tempImgs/1n.jpg"
                      height="200px"
                      width="200px"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <div className="w-96 flex justify-end">
                <Link href="./manufacturers">
                  <div className="text-white text-lg flex justify-end cursor-pointer">
                    همه تامین‌کنندگان
                    <span className="px-4 mt-2">
                      <svg
                        width="44"
                        height="17"
                        viewBox="0 0 44 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.00158691L0 8.00159L8 16.0016V10.0016H44V6.00159H8V0.00158691Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
