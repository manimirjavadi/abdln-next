import React from "react";
import { EnHeader } from "../UI/EnHeader";
import { Footer } from "../../components/Footer/EnFooter";
import Head from "next/head";

export default function NormalPages({ children }) {
  return (
    <div dir="ltr" className="mx-auto">
      <Head>
        <title> Abdollahian </title>
        <meta name="description" content="Abdollahian Official Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EnHeader hideHeader={true} otherPages={false} />
      <div className="h-[30px]"></div>
      <div>{children}</div>
      <div>
        <Footer otherPages={true} />
      </div>
    </div>
  );
}
