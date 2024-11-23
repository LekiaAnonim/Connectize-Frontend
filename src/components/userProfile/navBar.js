import React from "react";
import Navigationbar from "../../admin/services/navbar";

const Navbar = () => {
  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="">
          <img src="images/dangote.png" alt="#" className="w-full" />
          <img src="/images/dangotelogo.png" alt="company logo" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
