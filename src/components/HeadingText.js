import clsx from "clsx";
import React from "react";

export default function HeadingText({ children, center = false }) {
  return (
    <h1
      className={clsx("font-semibold text-3xl xs:text-2xl text-balance", {
        "text-center": center,
      })}
    >
      {children}
    </h1>
  );
}
