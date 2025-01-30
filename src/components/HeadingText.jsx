import clsx from "clsx";
import React from "react";

export default function HeadingText({
  children,
  center = false,
  weight = "bold",
  heading = "heading",
}) {
  return (
    <h1
      className={clsx("text-balance", {
        "text-center": center,
        "font-bold ": weight === "bold",
        "font-semibold": weight === "semibold",
        "text-xl": heading === "sub-heading",
        "text-2xl ": heading === "heading",
      })}
    >
      {children}
    </h1>
  );
}
