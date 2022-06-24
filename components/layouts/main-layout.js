import React from "react";
import { Header } from "../UI/Header";

export default function main({ children }) {
  return (
    <div dir="rtl" className="mx-auto">
      {/* <Header /> */}
      <div>{children}</div>
    </div>
  );
}
