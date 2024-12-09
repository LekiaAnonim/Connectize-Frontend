import React, { useEffect, useState } from "react";
import { Heart, VerifiedIcon } from "../../../icon";
import { ConJoinedImages } from "../../ResponsiveNav";
import { DownloadIcon, HeartIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { commentOnPost, getPosts, likePost } from "../../../api-services/posts";
import { formatNumber, timeAgo } from "../../../lib/utils";
import { Avatar, CloseButton, Tooltip } from "@chakra-ui/react";
import MoreOptions from "../../MoreOptions";
import FormatPostText from "../../FormatPostText";
import { ChangeCircleOutlined } from "@mui/icons-material";
import { useCustomQuery } from "../../../context/queryContext";
import jsPDF from "jspdf";
import { toast } from "sonner";
import { useAuth } from "../../../context/userContext";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import { MarkdownComponent } from "../../MarkDownComponent";

function DiscoverPosts() {
  const { refetchInterval } = useCustomQuery();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval,
  });

  return (
    <section className="space-y-4 mt-4">
      {isLoading
        ? Array.from({ length: 4 }, (_, index) => (
            <DiscoverPostSkeleton key={index} />
          ))
        : posts?.map((post, index) => (
            <DiscoverPostItem
              hasImage={post.images.length > 0}
              key={index}
              postItem={post}
            />
          ))}
    </section>
  );
}

export default DiscoverPosts;

const DiscoverPostItem = ({ postItem = {}, hasImage = false }) => {
  const [showCommentSection, setShowCommentSection] = useState(false);
  const { setRefetchInterval } = useCustomQuery();
  const { user: currentUser } = useAuth();
  const [timestamp, setTimestamp] = useState(timeAgo(postItem.date_created));

  const userHasLikedPost = postItem.likes.find(
    (post) => post.user.id === currentUser?.id
  )
    ? true
    : false;

  const handleLikePost = async () => {
    await likePost(postItem.id, postItem);
    setRefetchInterval(1000);
    setTimeout(() => setRefetchInterval(false), 2000);
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
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx("border-t border-gray-300 p-3", {
        "bg-white !border-0 rounded-md": hasImage,
      })}
    >
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Avatar
            name={postItem?.company?.company_name}
            className="size-10"
            src={postItem?.company?.logo}
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
          {postItem.images.map(({ image: src, id }) => (
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
          array={postItem.likes.slice(0, 5).map((post) => ({
            name: post.user.first_name,
            src: post.user.avatar,
          }))}
        />

        <div className="flex items-center gap-3">
          <ButtonWithTooltipIcon
            IconName={MessageOutlined}
            tip="Comments"
            textClassName="!text-[.6rem]"
            text={formatNumber(postItem.comments.length)}
            onClick={() => setShowCommentSection(!showCommentSection)}
          />
          <ButtonWithTooltipIcon
            IconName={userHasLikedPost ? Heart : HeartIcon}
            tip={userHasLikedPost ? "Unlike post" : "Like post"}
            onClick={handleLikePost}
            textClassName="!text-[.6rem]"
            text={formatNumber(postItem.likes.length)}
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

      <CommentSection
        showCommentSection={showCommentSection}
        setShowCommentSection={setShowCommentSection}
        commentsData={postItem.comments}
        postItem={postItem}
      />
    </motion.article>
  );
};

const CommentSection = ({
  showCommentSection,
  setShowCommentSection,
  commentsData = [],
  postItem,
}) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { setRefetchInterval } = useCustomQuery();

  const handleComment = async () => {
    setLoading(true);
    try {
      const { id } = await commentOnPost(postItem.id, postItem, comment);
      if (id) toast.info("Comment has been submitted");

      setRefetchInterval(1000);
      setTimeout(() => setRefetchInterval(false), 2000);
      setComment("");
    } catch (error) {
      // throw error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setComment("");
  }, []);
  return (
    <section
      className={clsx("overflow-hidden transition-all duration-300", {
        "mt-4 ": showCommentSection,
        "h-0 opacity-0": !showCommentSection,
      })}
    >
      <div className="mb-4 flex justify-between">
        <h2 className="font-bold text-lg">Comments</h2>
        <CloseButton
          className="!text-xs"
          onClick={() => setShowCommentSection(false)}
        />
      </div>
      {commentsData.map((comment) => (
        <CommentBlock
          key={comment.id}
          comment={comment}
          userId={postItem.user.id}
        />
      ))}
      <div className="mt-4 border-t pt-4 relative">
        <ReactQuill
          value={comment}
          onChange={(value) => {
            // Remove <p><br></p> if the editor is empty
            const cleanedValue = value === "<p><br></p>" ? "" : value;
            setComment(cleanedValue);
          }}
          theme="snow"
          placeholder="Type your comment here"
        />
        <button
          className="absolute bottom-1.5 right-2 bg-gray-300 disabled:bg-gray-200 hover:bg-gray-400 text-xs p-2 active:scale-95 disabled:active:scale-100 transition-all duration-300 rounded disabled:cursor-not-allowed"
          onClick={handleComment}
          disabled={loading || comment.trim().length < 1}
        >
          {loading ? "Commenting..." : "Comment"}
        </button>
      </div>
    </section>
  );
};

const CommentBlock = ({ comment, userId }) => {
  const [timestamp, setTimestamp] = useState(timeAgo(comment.commented_at));
  const { user: currentUser } = useAuth();

  useEffect(() => {
    const interval = setInterval(
      () => setTimestamp(timeAgo(comment.commented_at)),
      1000
    );
    return () => clearInterval(interval);
  });
  return (
    <div key={comment.id} className="mb-4">
      <div className="flex gap-2">
        <Avatar
          name={comment.user.first_name + " " + comment.user.last_name}
          className="!size-8"
          src={comment.user.avatar}
        />
        <div className="flex items-center gap-1">
          <h5 className="font-bold text-sm">
            {comment.user.first_name} {comment.user.last_name}
            <span className="text-[.65rem] text-gray-400 font-medium">
              {currentUser?.id === userId ? "(author) •" : ""}
            </span>
          </h5>
          <span className="text-gray-400 text-xs">{timestamp}</span>
        </div>
      </div>
      <div className="mt-1 text-gray-600">
        <MarkdownComponent
          markdownContent={comment.content}
          className="text-sm"
        />
      </div>
    </div>
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
      fontSize="12"
      placement="auto"
      className={clsx(
        "!rounded-md bg-white !text-custom_blue border",
        tooltipClassName
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          "flex items-center text-sm gap-1 bg-transparent text-gray-600 hover:text-custom_blue active:scale-95 transition-all duration-300",
          className
        )}
      >
        {IconName && <IconName className="!size-4" />}
        {text && <span className={`${textClassName}`}>{text}</span>}
      </button>
    </Tooltip>
  );
}

export const DiscoverPostSkeleton = ({ hasImage }) => {
  return (
    <div
      className={clsx(
        "border-t border-gray-200 p-3 animate-[pulse_5s_infinite]",
        {
          "bg-gray-100 !border-0 rounded-md": hasImage,
        }
      )}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Placeholder for logo */}
          <div className="size-10 rounded-full bg-gray-200" />

          <div className="flex flex-col gap-1">
            {/* Placeholder for company name */}
            <div className="h-4 w-24 bg-gray-200 rounded-md" />
            {/* Placeholder for small text */}
            <div className="h-3 w-40 bg-gray-200 rounded-md" />
          </div>
        </div>

        {/* Placeholder for More Options */}
        <div className="h-6 w-6 bg-gray-200 rounded-md" />
      </header>

      {/* Placeholder for post body */}
      <div className="mt-2 space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded-md" />
        <div className="h-4 w-full bg-gray-200 rounded-md" />
        <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
      </div>

      {/* Placeholder for images */}
      {hasImage && (
        <section className="grid grid-cols-3 gap-2 mt-2">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="size-full rounded-lg bg-gray-200" />
          ))}
        </section>
      )}

      {/* Placeholder for footer */}
      <div className="flex items-center gap-2 justify-between mt-4">
        {/* Placeholder for joined images */}
        <div className="flex -space-x-1 hover:space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="size-6 bg-gray-200 rounded-full border border-white transition-all duration-300"
            />
          ))}
        </div>

        {/* Placeholder for action buttons */}
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="size-6 bg-gray-200 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};
