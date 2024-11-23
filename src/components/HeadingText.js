import clsx from "clsx";
import React from "react";

export default function HeadingText({ children, center = false }) {
  return (
    <h1
      className={clsx("font-bold text-xl md:text-lg text-balance", {
        "text-center": center,
      })}
    >
      {children}
    </h1>
  );
}
