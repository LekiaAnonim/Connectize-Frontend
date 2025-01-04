import clsx from "clsx";
import React from "react";

export default function LightParagraph({ children, center, justify }) {
  return (
    <p
      className={clsx(
        "max-w-screen-xs lg:max-w-screen-sm text-gray-500 text-sm xl:text-base text-balance",
        {
          "text-center": center,
          "text-justify": justify,
        }
      )}
    >
      {children}
    </p>
  );
}
