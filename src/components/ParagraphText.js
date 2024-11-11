import clsx from "clsx";
import React from "react";

export default function LightParagraph({ children, center }) {
  return (
    <p
      className={clsx(
        "max-w-md lg:max-w-lg text-gray-500 text-sm xl:text-base text-balance",
        {
          "text-center": center,
        }
      )}
    >
      {children}
    </p>
  );
}
