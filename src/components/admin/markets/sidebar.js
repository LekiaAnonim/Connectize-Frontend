import React from "react";
import {
  Building,
  CircleFill,
  GreaterThan,
  Squares,
  UserGroup,
} from "../../../icon";
import "../services/navbar.css";
import { Link } from "react-router-dom";
import {
  Analytics,
  ChatRounded,
  ContactPage,
  DesignServices,
} from "@mui/icons-material";

function SidebarMenu() {
  return (
    <div className="mb-5">
      <div className=" bg-white px-2 pt-4 pb-5 rounded">
        <h3>Services</h3>
        <div className="d-flex">
          <p>
            <Building />
          </p>
          <Link to={"/market"} className="text-decoration-none text-black">
            <p className="ms-2">Market</p>
          </Link>
        </div>
        <Link
          to={"/organization"}
          className="d-flex text-black text-decoration-none"
        >
          <p>
            <UserGroup />
          </p>
          <p className="ms-2">Organization</p>
        </Link>
        <Link
          to={"/service"}
          className="d-flex text-black text-decoration-none"
        >
          <p>
            <DesignServices />
          </p>
          <p className="ms-2">Services</p>
        </Link>
        <Link
          to={"/analysis"}
          className="d-flex text-black text-decoration-none"
        >
          <p>
            <Analytics />
          </p>
          <p className="ms-2">Analytics</p>
        </Link>
        <Link
          to={"/listing"}
          className="rounded-pill bg-dark text-white px-2 border border-none py-1 mb-3 sidebar text-decoration-none"
        >
          List new product
          <GreaterThan />
        </Link>
        <div className="d-flex mt-3">
          <p>
            <Squares />
          </p>
          <p className="ms-2">Categories</p>
        </div>
        <Link to={"/chat"} className="d-flex text-black text-decoration-none">
          <p>
            <ChatRounded />
          </p>
          <p className="ms-2">Chat</p>
        </Link>
        <Link
          to={"/contact"}
          className="d-flex text-black text-decoration-none"
        >
          <p>
            <ContactPage />
          </p>
          <p className="ms-2">Contact</p>
        </Link>
        <Link
          to={"/serviceadmin"}
          className="rounded-pill bg-black border border-none px-2 py-1 mb-3 sidebar text-decoration-none text-white"
        >
          List new service
          <GreaterThan />
        </Link>

        <div className="d-flex">
          <p>
            <CircleFill />
          </p>
          <p className="ms-2">Marketplaces</p>
        </div>
        <div className="d-flex">
          <p>
            <CircleFill />
          </p>
          <p className="ms-2">Marketplaces</p>
        </div>
        <div className="d-flex">
          <p>
            <CircleFill />
          </p>
          <p className="ms-2">Marketplaces</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
