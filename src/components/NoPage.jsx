import React from "react";
import HeadingText from "./HeadingText";

function NoPage() {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center">
      <HeadingText>Error 404: No content found</HeadingText>
    </section>
  );
}

export default NoPage;
