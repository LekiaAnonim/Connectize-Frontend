import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/images/logo.png"
        style={{ height: "60px" }}
        alt="connectize logo"
      />
    </Link>
  );
}

export default Logo;
