import React from "react";

export default function main({ children }) {
  return (
    <div dir="rtl">
      <div>{children}</div>
    </div>
  );
}
