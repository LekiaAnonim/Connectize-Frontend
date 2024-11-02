import React from "react";
import { AlignmentIcon, GalleryIcon, GifIcon, SmileIcon } from "../../../icon";

function CreatePost() {
  return (
    <div className="my-6 bg-white px-4 md:px-4 py-4 rounded border-b-[5px] border-gold">
      <input
        type="text"
        placeholder="What's happening"
        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:outline-0 text-xl"
      />

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MaskedIcon Icon={GalleryIcon} />
          <MaskedIcon Icon={GifIcon} />
          <MaskedIcon Icon={AlignmentIcon} />
          <MaskedIcon Icon={SmileIcon} />
        </div>
        <button className="text-sm rounded-full bg-gold hover:bg-gold/60 py-2.5 px-4 transition-opacity duration-300">
          create post
        </button>
      </div>
    </div>
  );
}

const MaskedIcon = ({ Icon }) => (
  <button className="bg-gray-200/80 py-2 px-4 rounded-sm outline-0">
    <Icon />
  </button>
);

export default CreatePost;
