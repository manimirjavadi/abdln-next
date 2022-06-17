import React from "react";

export default function news({ children }) {
  return (
    <div dir="rtl">
      <div>New Layout</div>
      <div>{children}</div>
    </div>
  );
}
