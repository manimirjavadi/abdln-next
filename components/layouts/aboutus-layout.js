import React from "react";
import { Header } from "../UI/Header";
import { Footer } from "../../components/Footer/Footer";

export default function aboutus({ children }) {
  return (
    <div dir="rtl" className="mx-auto">
      <Header hideHeader={true} otherPages={false} />
      <div className="h-[100px]"></div>
      <div>{children}</div>
      <div>
        <Footer otherPages={true} />
      </div>
    </div>
  );
}
