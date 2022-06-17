import React from "react";

export default function main({ children }) {
  return (
    <div dir="rtl">
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
}
