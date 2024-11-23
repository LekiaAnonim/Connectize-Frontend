import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreOptions from "../../MoreOptions";
import LightParagraph from "../../ParagraphText";

export default function Reviews() {
  return (
    <section className="bg-white my-4 p-3 rounded-md space-y-4">
      <h1 className="p-2 text-xl md:text-lg font-bold">Reviews</h1>
      <section className="space-y-4">
        <Review
          image="/images/bmw.PNG"
          name="cody fisher"
          date="05-06-2024"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem   accusantium"
        />
        <Review
          image="/images/bmwprofilepicture.png"
          name="Mitsubishi"
          date="05-06-2024"
          text="Sed ut perspiciatis unde omnis iste natus error"
        />
      </section>
    </section>
  );
}

const Review = ({ image, name, date, text }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={image} alt={name} className="size-[80px]" />

      <div className="w-full">
        <div className="flex justify-between">
          <h4 className="capitalize font-bold text-lg md:text-base">{name}</h4>
          <MoreOptions>
            <div>more options</div>
          </MoreOptions>
        </div>
        <div>
          <small className="text-custom_grey text-xs">{date}</small>
          <LightParagraph>{text}</LightParagraph>
        </div>
      </div>
    </div>
  );
};
