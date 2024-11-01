import React from "react";
import { LeftSideBar } from "../../components/admin/feeds/home/LeftSideBar";
import PrimarySearchAppBar from "../../components/admin/feeds/home/Header";
import { RightSideBar } from "../../components/admin/feeds/home/RightSideBar";
import MainContainer from "../../components/admin/feeds/home/MainContainer";
import "../../index.css";

export default function FeedPage() {
  return (
    <div
      className="page-container feed-page-container mt-0"
      style={{ background: "#faf9f7" }}
    >
      <LeftSideBar />
      <div>
        <PrimarySearchAppBar />
        <MainContainer />
      </div>
      <RightSideBar />
    </div>
  );
}
