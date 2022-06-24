import React from "react";
import { Header } from "../UI/Header";
import { Footer } from "../../components/Footer/Footer";
import Head from "next/head";

export default function aboutus({ children }) {
  return (
    <div dir="rtl" className="mx-auto">
      <Head>
        <title>عبداللهیان</title>
        <meta name="description" content="وبسایت رسمی عبداللهیان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hideHeader={true} otherPages={false} />
      <div className="h-[100px]"></div>
      <div>{children}</div>
      <div>
        <Footer otherPages={true} />
      </div>
    </div>
  );
}
