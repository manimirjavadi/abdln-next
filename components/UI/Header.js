import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "../../assets/images/abdln_f.png";
import darkLogo from "../../assets/images/abdln_top.png";
import { useRouter } from "next/router";
import TIcon from "../icons/TIcon";

export const Header = (props) => {
  const router = useRouter();
  const { home } = props;
  const [menu, setMenu] = useState(0);

  const menuHandler = () => {
    if (menu === 1) {
      setMenu(2);
    } else {
      setMenu(1);
    }
  };
  return (
    <header className="absolute top-0 z-50 w-full">
      {menu === 1 && (
        <div
          onClick={menuHandler}
          className="absolute h-screen w-full mt-16 bg-black/20"
        />
      )}
      <nav className="py-5">
        <aside
          className={`bg-abdlBlue top-16 right-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 ${
            menu === 1 ? "" : "translate-x-full"
          }`}
        >
          <div className="grid place-items-center h-1/2">
            <ul className="">
              <Link href="/">
                <a
                  className={`${router.pathname === "/" ? "navbarActive" : ""}`}
                >
                  <li className="text-lg mb-5 text-center">صفحه اصلی</li>
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  className={`${
                    router.pathname.startsWith("/aboutus") ? "navbarActive" : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">درباره ما</li>
                </a>
              </Link>
              <Link href="/products/all">
                <a
                  className={`${
                    router.pathname.startsWith("/products")
                      ? "navbarActive"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">محصولات</li>
                </a>
              </Link>
              <Link href="/reps/all">
                <a
                  className={`${
                    router.pathname.startsWith("/reps") ? "navbarActive" : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">اخبار</li>
                </a>
              </Link>
              <Link href="/blog/all/1">
                <a
                  className={`${
                    router.pathname.startsWith("/blog")
                      ? "navbarActive mobile"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">تامین‌کنندگان</li>
                </a>
              </Link>
              <Link href="/jobs/jform">
                <a
                  className={`${
                    router.pathname.startsWith("/jobs")
                      ? "navbarActive mobile"
                      : ""
                  }`}
                >
                  <li className="text-lg mb-5 text-center">تماس با ما</li>
                </a>
              </Link>
            </ul>
          </div>
        </aside>
        <div className="max-w-6xl mx-auto text-white px-2">
          <div className="flex justify-between">
            <div className="md:hidden flex items-center ml-6">
              <label onClick={menuHandler} className="btn btn-square btn-ghost">
                <TIcon width="32" height="32" className="fill-white">
                  hamburgerMenu
                </TIcon>
              </label>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/">
                <a
                  className={`h-full grid place-content-center px-3 navbarText ml-8  ${
                    router.pathname === "/"
                      ? "navbarActive"
                      : "hover:text-abdOrange hover:border-b-4 hover:border-b-abdOrange duration-200"
                  }`}
                >
                  <span className="text-sm font-bold ">صفحه اصلی</span>
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  className={`h-full grid place-content-center px-3 text-darkGrey ml-8  ${
                    router.pathname.startsWith("/aboutus")
                      ? "navbarActive"
                      : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"
                  }`}
                >
                  <span className="text-sm font-bold">درباره ما</span>
                </a>
              </Link>
              <Link href="/products/all">
                <a
                  className={`h-full grid place-content-center px-3 navbarText ml-8 ${
                    router.pathname.startsWith("/products")
                      ? "navbarActive"
                      : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"
                  }`}
                >
                  <span className="text-sm font-bold">محصولات</span>
                </a>
              </Link>
              <Link href="/products/all">
                <a
                  className={`h-full grid place-content-center px-3 navbarText ml-8 ${
                    router.pathname.startsWith("/products")
                      ? "navbarActive"
                      : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"
                  }`}
                >
                  <span className="text-sm font-bold">اخبار</span>
                </a>
              </Link>
              <Link href="/products/all">
                <a
                  className={`h-full grid place-content-center px-3 navbarText ml-8 ${
                    router.pathname.startsWith("/products")
                      ? "navbarActive"
                      : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"
                  }`}
                >
                  <span className="text-sm font-bold">تامین‌کنندگان</span>
                </a>
              </Link>
              <Link href="/contactus">
                <a
                  className={`h-full grid place-content-center px-3 navbarText ml-8 ${
                    router.pathname.startsWith("/contactus")
                      ? "navbarActive"
                      : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"
                  }`}
                >
                  <span className="text-sm font-bold">تماس با ما</span>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/">
                <a>
                  <Image
                    src={darkLogo}
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
