import { ShareAltOutlined } from "@ant-design/icons";
import React from "react";
import { Heart, StarFilledIcon, StarOutlinedIcon } from "../../../icon";
import MoreOptions from "../../MoreOptions";

const ListedProducts = () => {
  return (
    <section className="bg-white p-3 rounded-md">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl md:text-lg font-semibold">Listed Products</h4>
        <MoreOptions>
          <div>more options</div>
        </MoreOptions>
      </div>
      <section className="space-y-4">
        <ListedProduct />
        <ListedProduct />
        <ListedProduct />
      </section>
    </section>
  );
};

function ListedProduct({ src, title, likes }) {
  return (
    <div className="bg-background p-2.5 rounded-md flex max-sm:flex-col gap-2 sm:gap-4 relative">
      <picture className="bg-white sm:w-1/3 p-4 sm:p-1 rounded-md sm:h-fit">
        <img
          src={src || "/images/drum1.PNG"}
          className="w-3/4 sm:w-full mx-auto"
          alt={title || "oil barrels"}
        />
      </picture>

      <div className="sm:w-2/3">
        <div className="sm:flex justify-between items-start border-b pb-2 pt-2">
          <h4 className="max-md:text-xl font-bold">
            {title || "Premium Black Gold Reserve"}
          </h4>
          <div className="max-md:absolute top-4 right-4">
            <MoreOptions>
              <div>more options</div>
            </MoreOptions>
          </div>
        </div>

        <div className="flex mt-2.5 md:mt-3.5">
          {[1, 2, 3].map((_, index) => (
            <StarFilledIcon key={index} />
          ))}
          {[1, 2].map((_, index) => (
            <StarOutlinedIcon key={index} />
          ))}
        </div>

        <div className="absolute bottom-3 right-4 flex gap-3">
          <div className="flex items-end gap-0.5">
            <Heart />
            <small className="text-[.55rem] font-bold">{likes || "178k"}</small>
          </div>
          <ShareAltOutlined />
        </div>
      </div>
    </div>
  );
}
export default ListedProducts;