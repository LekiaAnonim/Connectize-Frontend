import React, { useEffect, useState } from "react";
import { Heart, VerifiedIcon } from "../../../icon";
import { ConJoinedImages } from "../../ResponsiveNav";
import { DownloadIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { getPosts, likePost } from "../../../api-services/posts";
import { timeAgo } from "../../../lib/utils";
import { Button, Tooltip } from "@chakra-ui/react";
import MoreOptions from "../../MoreOptions";
import FormatPostText from "../../FormatPostText";
import { ChangeCircleOutlined } from "@mui/icons-material";
import { useCustomQuery } from "../../../context/queryContext";
import jsPDF from "jspdf";
import { toast } from "sonner";

function DiscoverPosts() {
  const { refetchInterval } = useCustomQuery();
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval,
  });

  return (
    <section className="space-y-4 mt-4">
      {posts?.map((post, index) => (
        <DiscoverPostItem
          hasImage={post.images_data.length > 0}
          key={index}
          postItem={post}
        />
      ))}
    </section>
  );
}

export default DiscoverPosts;

const DiscoverPostItem = ({ postItem = {}, hasImage = false }) => {
  const { setRefetchInterval } = useCustomQuery();
  const [timestamp, setTimestamp] = useState(timeAgo(postItem.date_created));

  const handleLikePost = async () => {
    try {
      await likePost(postItem.id, postItem);
      setRefetchInterval(1000);
      setTimeout(() => setRefetchInterval(false), 2000);
      toast.success("Post has been liked");
    } catch (error) {
      toast.error("An error occurred while liking post");
    }
  };

  const sharePost = async () => {
    const shareUrlString = window.location.href + "posts/" + postItem.id;
    if (navigator.share) {
      try {
        await navigator.share({
          title:
            "Connectize Post " +
            postItem.id +
            " - " +
            postItem.company.company_name,
          text: postItem.body,
          url: shareUrlString, // You can replace this with the post's URL
        });
      } catch (error) {
        console.log("Error sharing:", error);
        toast.error("An error occurred while sharing post");
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrlString
      )}`;
      window.open(shareUrl, "_blank");
    }
  };

  const handlePostDownloadPDF = () => {
    const doc = new jsPDF();

    // Add title and content to the PDF
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text(
      "Connectize Post " + postItem.id + " - " + postItem.company.company_name,
      10,
      10
    );

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(postItem.body, 10, 20, { maxWidth: 180 }); // Wraps text within 180mm

    // Save the PDF
    doc.save(`${"Connectize_Post_" + postItem.id}.pdf`);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setTimestamp(timeAgo(postItem.date_created)),
      1000
    );
    return () => clearInterval(interval);
  });
  return (
    <article
      className={clsx("border-t border-gray-300 p-3", {
        "bg-white !border-0 rounded-md": hasImage,
      })}
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
            <small className="text-gray-400 lowercase">
              @{postItem.user.first_name} • {timestamp}
            </small>
          </div>
        </div>

        <MoreOptions>
          <div className="flex flex-col gap-2">
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
        <section className="grid grid-cols-3 gap-2 mt-2">
          {postItem.images_data.map(({ image: src, id }) => (
            <img
              key={id}
              src={src}
              className="size-full rounded-lg"
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
          <ButtonWithTooltipIcon
            IconName={MessageOutlined}
            tip="Comment"
            text={postItem.comments.length}
          />
          <ButtonWithTooltipIcon
            IconName={Heart}
            tip="Like post"
            onClick={handleLikePost}
            text={postItem.likes.length}
          />
          <ButtonWithTooltipIcon
            IconName={DownloadIcon}
            tip="Download post"
            onClick={handlePostDownloadPDF}
          />
          <ButtonWithTooltipIcon
            IconName={ShareAltOutlined}
            tip="Share post"
            onClick={sharePost}
          />
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
  textClassName,
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
          "flex items-center !justify-start !text-start !text-sm gap-1 bg-transparent hover:!bg-gray-100 !py-0 text-gray-400 hover:text-custom_blue active:scale-95 transition-all duration-300",
          className
        )}
      >
        {IconName && <IconName className="!size-4" />}
        {text && (
          <span className={`${textClassName} !text-[.5rem]`}>{text}</span>
        )}
      </Button>
    </Tooltip>
  );
}
