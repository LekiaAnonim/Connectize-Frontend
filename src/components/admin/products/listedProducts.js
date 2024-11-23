import { ShareAltOutlined } from "@ant-design/icons";
import React from "react";
import { Heart, StarFilledIcon, StarOutlinedIcon } from "../../../icon";
import HeadingText from "../../HeadingText";
import { MoreHoriz } from "@mui/icons-material";

const ListedProducts = () => {
  return (
    <section className="bg-white p-3 rounded-md">
      <div className="flex items-center justify-between mb-3">
        <HeadingText>Listed Products</HeadingText>
        <button className="p-1 mr-5">
          <MoreHoriz />
        </button>
      </div>
      <section className="space-y-4">
        <ListedProduct />
        <ListedProduct />
        <ListedProduct />
      </section>
    </section>
  );
};

function ListedProduct() {
  return (
    <div className="bg-background p-2.5 rounded-md flex max-sm:flex-col gap-2 sm:gap-4 relative">
      <picture className="bg-white sm:w-1/3 p-4 sm:p-1 rounded-md">
        <img
          src="/images/drum1.PNG"
          className="w-3/4 sm:w-full mx-auto"
          alt="oil barrels"
        />
      </picture>

      <div className="sm:w-2/3">
        <div className="sm:flex justify-between items-start border-b pb-2 pt-2">
          <h4 className="text-xl font-bold">Premium Black Gold Reserve</h4>
          <button className="max-sm:absolute right-5 top-4">
            <MoreHoriz />
          </button>
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
            <small className="text-[.55rem] font-bold">{"178k"}</small>
          </div>
          <ShareAltOutlined />
        </div>
      </div>
    </div>
  );
}
export default ListedProducts;
