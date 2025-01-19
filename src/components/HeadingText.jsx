import clsx from "clsx";
import React from "react";

export default function HeadingText({
  children,
  center = false,
  weight = "bold",
}) {
  return (
    <h1
      className={clsx("text-2xl text-balance", {
        "text-center": center,
        "font-bold ": weight === "bold",
        "font-semibold": weight === "semibold",
      })}
    >
      {children}
    </h1>
  );
}
