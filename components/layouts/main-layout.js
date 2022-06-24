import React from "react";

export default function main({ children }) {
  return (
    <div dir="rtl" className="mx-auto bg-white">
      {/* <Header /> */}
      <div>{children}</div>
    </div>
  );
}
