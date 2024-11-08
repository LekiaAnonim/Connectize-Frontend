import React from "react";
import { Heart, Threedot, VerifiedIcon } from "../../../icon";
import { ConJoinedImages } from "../../ResponsiveNav";
import { DownloadIcon } from "@radix-ui/react-icons";
import { MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import clsx from "clsx";

function DiscoverPosts() {
  return (
    <section className="space-y-4">
      <DiscoverPostItem hasImage />
      <DiscoverPostItem />
      <DiscoverPostItem />
      <DiscoverPostItem />
    </section>
  );
}

export default DiscoverPosts;

const DiscoverPostItem = ({ postItem = {}, hasImage = false }) => {
  return (
    <article
      className={clsx(
        "first:bg-white border-t border-gray-300 first:border-0 first:rounded p-3"
      )}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/passport16.PNG"
            alt="Post"
            className="size-10 rounded-full"
          />

          <div className="flex items-center gap-1">
            <span className="text-lg xl:text-xl font-bold">Dangote Oil</span>
            <VerifiedIcon color="black" />
            <small className="text-gray-400">@dangote • 14s</small>
          </div>
        </div>

        <button className="px-3">
          <Threedot />
        </button>
      </header>

      <p>
        This is a tweet. It can be long, or short. Depends on what you have to
        say. It can have some hashtags too.{" "}
        <span className="text-blue-400">#likethis</span> This is a tweet. It can
        be long, or short. Depends on what you have to say. It can have some
        hashtags too. <span className="text-blue-400">#likethis</span>
      </p>

      {hasImage && (
        <>
          <div className="grid grid-cols-3 gap-3">
            {[
              "/images/company1.PNG",
              "/images/company2.PNG",
              "/images/company3.PNG",
            ].map((src) => (
              <img
                key={src}
                src={src}
                className="size-full"
                alt="some images for post"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 justify-between mt-4">
            <ConJoinedImages
              size={25}
              array={[
                "/images/passport9.PNG",
                "/images/passport10.PNG",
                "/images/passport11.PNG",
                "/images/passport12.PNG",
                "/images/iconprofile.PNG",
              ]}
            />

            <div className="flex items-center gap-3">
              <MessageOutlined />
              <Heart />
              <DownloadIcon />
              <ShareAltOutlined />
            </div>
          </div>
        </>
      )}
    </article>
  );
};
