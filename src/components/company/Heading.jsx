import React from "react";
import HeadingText from "../HeadingText";

export default function Heading({ companyLength }) {
  return (
    <header>
      <HeadingText>Companies</HeadingText>
      {companyLength > 0 && (
        <small className="text-[.675rem] leading-none text-gray-400 block">
          {companyLength} {companyLength > 1 ? "Companies " : "Company "}Found
        </small>
      )}
    </header>
  );
}
