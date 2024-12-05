import React, { useEffect, useState } from "react";
import { Heart, VerifiedIcon } from "../../../icon";
import { ConJoinedImages } from "../../ResponsiveNav";
import { DownloadIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api-services/posts";
import { timeAgo } from "../../../lib/utils";
import { Button, Tooltip } from "@chakra-ui/react";
import MoreOptions from "../../MoreOptions";
import FormatPostText from "../../FormatPostText";
import { ChangeCircleOutlined } from "@mui/icons-material";

function DiscoverPosts() {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <section className="space-y-4 mt-4">
      {posts?.map((post, index) => (
        <DiscoverPostItem hasImage={index === 0} key={index} postItem={post} />
      ))}
    </section>
  );
}

export default DiscoverPosts;

const DiscoverPostItem = ({ postItem = {}, hasImage = false }) => {
  const [timestamp, setTimestamp] = useState(timeAgo(postItem.date_created));

  useEffect(() => {
    const interval = setInterval(
      () => setTimestamp(timeAgo(postItem.date_created)),
      1000
    );
    return () => clearInterval(interval);
  });
  return (
    <article
      className={clsx(
        "first:bg-white border-t border-gray-300 first:border-0 first:rounded-md p-3"
      )}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={postItem?.company?.logo || "/images/logo.png"}
            alt="Post"
            className="size-10 rounded-full"
          />

          <div className="flex items-center gap-1">
            <h4 className=" md:text-sm lg:text-base font-bold capitalize">
              {postItem?.company?.company_name}
            </h4>
            {postItem?.company?.verify && <VerifiedIcon color="black" />}
            <small className="text-gray-400">@dangote • {timestamp}</small>
          </div>
        </div>

        <MoreOptions>
          <div className="flex flex-col">
            <ButtonWithTooltipIcon text="Edit post" IconName={Pencil2Icon} />
            <ButtonWithTooltipIcon
              text="Convert to draft"
              IconName={ChangeCircleOutlined}
            />
            <ButtonWithTooltipIcon
              text="Delete post"
              className="!text-white !bg-red-700 hover:!bg-red-500"
            />
          </div>
        </MoreOptions>
      </header>

      <FormatPostText text={postItem.body} />

      {hasImage && (
        <section className="grid grid-cols-3 gap-3">
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
        </section>
      )}
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

        <div className="flex items-center gap-0.5">
          <ButtonWithTooltipIcon IconName={MessageOutlined} tip="Comment" />
          <ButtonWithTooltipIcon IconName={Heart} tip="Like post" />
          <ButtonWithTooltipIcon IconName={DownloadIcon} tip="Download post" />
          <ButtonWithTooltipIcon IconName={ShareAltOutlined} tip="Share post" />
        </div>
      </div>
    </article>
  );
};

export function ButtonWithTooltipIcon({
  IconName,
  text,
  onClick,
  tip,
  className,
  tooltipClassName,
}) {
  return (
    <Tooltip
      label={tip}
      fontSize="sm"
      placement="auto"
      className={clsx(
        "!rounded-md bg-white !text-custom_blue border",
        tooltipClassName
      )}
    >
      <Button
        onClick={onClick}
        className={clsx(
          "flex items-center !justify-start !text-start !text-sm gap-1 bg-transparent hover:!bg-gray-100 !py-0 text-gray-400 hover:text-custom_blue transition-colors duration-300",
          className
        )}
      >
        {IconName && <IconName className="!size-4 " />}
        {text && <span>{text}</span>}
      </Button>
    </Tooltip>
  );
}