import React from "react";
import Logo from "./logo";
import HeadingText from "./HeadingText";

function NoPage() {
  const year = new Date().getFullYear();
  return (
    <section className="min-h-screen w-full flex flex-col">
      <section className="container py-2 flex-1 flex flex-col">
        <Logo />
        <div className="flex flex-col justify-center items-center text-center flex-1">
          <HeadingText>Error 404: No content found</HeadingText>
        </div>
      </section>
      <footer className="text-center py-5">
        <p>ALL RIGHT RESERVED &copy; {year}</p>
      </footer>
    </section>
  );
}

export default NoPage;
