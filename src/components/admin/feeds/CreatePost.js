import React from "react";
import { AlignmentIcon, GalleryIcon, GifIcon, SmileIcon } from "../../../icon";

function CreatePost() {
  return (
    <div className="bg-white px-4 md:px-4 py-4 rounded border-b-[5px] border-gold">
      <input
        type="text"
        placeholder="What's happening"
        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:outline-0 text-xl"
      />

      <div className="mt-4 flex max-sm:flex-col md:flex-col lg:flex-row sm:items-center justify-between max-sm:gap-4 md:gap-4 lg:gap-1">
        <div className="flex items-center gap-2">
          <MaskedIcon Icon={GalleryIcon} />
          <MaskedIcon Icon={GifIcon} />
          <MaskedIcon Icon={AlignmentIcon} />
          <MaskedIcon Icon={SmileIcon} />
        </div>
        <button className="text-sm rounded-full bg-gold hover:bg-gold/60 py-2.5 px-4 transition-opacity duration-300 md:w-full lg:w-fit">
          create post
        </button>
      </div>
    </div>
  );
}

const MaskedIcon = ({ Icon }) => (
  <button className="bg-gray-200/50 py-2 px-4 rounded-sm outline-0 max-sm:w-full grid place-items-center">
    <Icon />
  </button>
);

export default CreatePost;
