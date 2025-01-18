import React from "react";
import HeadingText from "../HeadingText";

export default function Heading({ companyLength }) {
  return (
    <header>
      <HeadingText>Companies</HeadingText>
      <small className="text-[.675rem] text-gray-400">
        {companyLength} {companyLength > 1 ? "Companies " : "Company "}Found
      </small>
    </header>
  );
}
