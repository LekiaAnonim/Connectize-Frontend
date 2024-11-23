import React, { useEffect } from "react";
// import Navigationbar from "../../admin/services/navbar";

import Logo from "../logo";

const Header = () => {
  useEffect(() => {
    document.title = "User Profile - Connectize";
  }, []);

  return (
    <header className="">
      {/* <Navigationbar /> */}
      <nav className="w-full h-16 flex items-center bg-white">
        <section className="max-md:container py-2 md:px-4">
          <Logo />
        </section>
        {/* Proper navigation bar */}
      </nav>
      <section className="relative">
        <img
          src="images/dangote.png"
          alt="{company} hero"
          className="w-full min-h-64 aspect-auto"
        />
        <img
          src="/images/dangotelogo.png"
          alt="company logo"
          className="absolute left-[7%] md:left-[3%] bottom-10 w-[90px] lg:w-[120px]"
        />
      </section>
    </header>
  );
};

export default Header;
