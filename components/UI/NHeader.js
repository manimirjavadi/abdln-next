import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "../../assets/images/abdln_f.png";
import { useRouter } from "next/router";
import TIcon from "../icons/TIcon";
import { motion, useAnimation } from "framer-motion";

const headerVariant = {
  orange: {
    color: "#D98C00",
  },
  white: {
    color: "white",
  },
};

export const NHeader = ({ hideHeader, otherPages }) => {
  const router = useRouter();
  const [menu, setMenu] = useState(0);
  const animationController = useAnimation();

  const menuHandler = () => {
    if (menu === 1) {
      setMenu(2);
    } else {
      setMenu(1);
    }
  };

  useEffect(() => {
    if (hideHeader) {
      animationController.start("hidden");
    } else {
      animationController.start("visible");
    }
  }, [hideHeader, animationController]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {menu === 1 && (
        <div
          onClick={menuHandler}
          className="absolute h-screen w-full mt-16 bg-black/20"
        />
      )}
      <nav className="max-w-6xl mx-auto bg-white py-3 rounded-b-3xl px-5 shadow-md">
        <aside
          className={`bg-[#EBEBEB] top-16 right-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 ${
            menu === 1 ? "" : "translate-x-full"
          }`}
        >
          <div className="grid place-items-center h-1/2">
            <ul className="">
              <Link href="/">
                <motion.a
                  className={`${
                    router.pathname === "/" ? "navbarActiveDark" : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">صفحه اصلی</li>
                </motion.a>
              </Link>
              <Link href="/aboutus">
                <a
                  className={`${
                    router.pathname.startsWith("/nproducts")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">درباره ما</li>
                </a>
              </Link>
              <Link href="/nproducts/list">
                <a
                  className={`${
                    router.pathname.startsWith("/sproducts")
                      ? "navbarActive"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">محصولات صنعتی</li>
                </a>
              </Link>
              <Link href="/sproducts/list">
                <a
                  className={`${
                    router.pathname.startsWith("/sproducts")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">محصولات آرایشی</li>
                </a>
              </Link>
              <Link href="/news/list/1">
                <a
                  className={`${
                    router.pathname.startsWith("/news")
                      ? "navbarActiveDark mobile"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">اخبار</li>
                </a>
              </Link>
              <Link href="/manufacturers/list">
                <a
                  className={`${
                    router.pathname.startsWith("/manufacturers")
                      ? "navbarActiveDark mobile"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">تامین‌کنندگان</li>
                </a>
              </Link>
            </ul>
          </div>
        </aside>
        <div className="max-w-6xl mx-auto text-white px-2">
          <div className="flex justify-between">
            <div className="md:hidden flex items-center ml-6">
              <label onClick={menuHandler} className="btn btn-square btn-ghost">
                <TIcon width="32" height="32" className="fill-abdlBlue">
                  hamburgerMenu
                </TIcon>
              </label>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/">
                <a
                  className={`h-full grid place-content-center px-3 ml-8  ${
                    router.pathname === "/" ? "navbarActiveDark" : ""
                  }`}
                >
                  <span className="text-sm font-bold ">صفحه اصلی</span>
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  className={`h-full grid place-content-center px-3 text-darkGrey ml-8  ${
                    router.pathname.startsWith("/aboutus")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">درباره ما</span>
                </a>
              </Link>
              <Link href="/nproducts/list">
                <a
                  className={`h-full grid place-content-center px-3 ml-8 ${
                    router.pathname.startsWith("/nproducts")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">محصولات صنعتی</span>
                </a>
              </Link>
              <Link href="/sproducts/list">
                <a
                  className={`h-full grid place-content-center px-3 ml-8 ${
                    router.pathname.startsWith("/sproducts")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">محصولات آرایشی</span>
                </a>
              </Link>
              <Link href="/news/list/1">
                <a
                  className={`h-full grid place-content-center px-3 ml-8 ${
                    router.pathname.startsWith("/news")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">اخبار</span>
                </a>
              </Link>
              <Link href="/manufacturers/list">
                <a
                  className={`h-full grid place-content-center px-3 ml-8 ${
                    router.pathname.startsWith("/manufacturers")
                      ? "navbarActiveDark"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">تامین‌کنندگان</span>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/">
                <a>
                  <Image
                    src={lightLogo}
                    height="45rem"
                    width="90rem"
                    alt="عبداللهیان"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
