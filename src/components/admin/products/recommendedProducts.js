import React from "react";
import HeadingText from "../../HeadingText";
import { Heart, StarFilledIcon, StarOutlinedIcon } from "../../../icon";
import { ShareAltOutlined } from "@ant-design/icons";

const RecommendedProducts = () => {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-md">
      <HeadingText>Recommended Products</HeadingText>
      <div className="bg-background p-3 sm:p-6 rounded-md mt-2 flex max-sm:flex-col gap-2 sm:gap-4 relative">
        <picture className="bg-white sm:w-1/3 p-4 rounded-md">
          <img
            src="/images/drum1.PNG"
            className="w-3/4 sm:w-full mx-auto"
            alt="oil barrels"
          />
        </picture>

        <div className="sm:w-2/3">
          <h4 className="text-xl font-bold border-b border-gray-200 pb-2.5 md:pb-3.5 pt-2">
            Premium Black Gold Reserve
          </h4>

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
    </div>
  );
};

export default RecommendedProducts;
