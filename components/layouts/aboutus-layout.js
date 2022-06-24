import React from "react";
import { Header } from "../UI/Header";
import { Footer } from "../../components/Footer/Footer";
import Head from "next/head";

export default function aboutus({ children }) {
  return (
    <div dir="rtl" className="mx-auto">
      <Head>
        <title>عبدالهیان | تامین کننده مواد شیمیایی و معدنی</title>
        <meta name="description" content="وبسایت رسمی عبدالهیان" />
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
