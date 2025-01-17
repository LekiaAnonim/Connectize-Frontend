import React from "react";
import HeadingText from "./HeadingText";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center space-y-3">
      <HeadingText>Error 404: No content found</HeadingText>
      <Link to="/" >Go Home</Link>
    </section>
  );
}

export default NoPage;
