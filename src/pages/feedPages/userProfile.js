import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Reviews from "../../components/admin/feeds/reviews";
import Summary from "../../components/admin/feeds/summary";
import Company from "../../components/admin/feeds/company";
import { Suggestions } from "../../components/admin/feeds/TopServiceSuggestions";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import Navbar from "../../components/profile/userProfile/navBar";
import HeadingText from "../../components/HeadingText";

export default function UserProfile() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="mt-20 container">
        <div className="col-sm-5 col-md-5 col-lg-4">
          <ListedProduct
            post="25k post"
            followers="1M followers"
            reviews="157 Reviews"
          />
          <div className="flex items-center justify-between bg-white p-2 rounded-md">
            <HeadingText>Listed products</HeadingText>
            <button className="p-4">
              <MoreHorizIcon />
            </button>
          </div>

          <Reviews />
        </div>
        <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-3 py-2">
          <div>
            <Summary />
            <DiscoverFeed />
          </div>
          <Suggestions />
        </section>
      </section>
    </main>
  );
}

function ListedProduct({ post, followers, reviews }) {
  return (
    <div>
      <div>
        <HeadingText>Dangote oil refinery</HeadingText>
        <div className="my-4">
          <button className="rounded-pill py-1 px-2 me-1 border border-none">
            {post}
          </button>
          <button className="rounded-pill py-1 px-2 me-1 border border-none">
            {followers}
          </button>
          <button className="rounded-pill py-1 px-2 border border-none">
            {reviews}
          </button>
        </div>
      </div>
    </div>
  );
}
