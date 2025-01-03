import React, { memo, useCallback, useEffect, useState } from "react";
import { Heart, VerifiedIcon } from "../../../icon";
import { avatarStyle, ConJoinedImages } from "../../ResponsiveNav";
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
import { baseURL } from "../../../lib/helpers";
import { Link } from "react-router-dom";

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

export const DiscoverPostItem = ({
  postItem = {},
  hasImage = false,
  isSinglePost = false,
}) => {
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
          url: shareUrlString,
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
    doc.save(`Connectize_post_${postItem.id}.pdf`);
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
      className={clsx("py-3 px-1 xs:px-3", {
        "bg-white !border-0 rounded-md": hasImage || isSinglePost,
        "border-t border-gray-300": !isSinglePost,
      })}
    >
      <header className="flex justify-between mb-2 gap-4 xs:gap-6 w-full overflow-hidden">
        <section className="flex xs:items-center gap-2">
          <Avatar
            name={postItem?.company?.company_name}
            size="sm"
            src={postItem?.company?.logo}
            className={avatarStyle}
          />

          <section className="flex max-xs:flex-col xs:items-center gap-0.5 xs:gap-1">
            <div className="flex">
              <Link
                to={
                  "/" +
                  postItem?.company?.company_name
                    .toLowerCase()
                    .replace(/\s/g, "_")
                }
                className="text-lg xs:text-base md:text-sm lg:text-base font-bold break-all line-clamp-1"
              >
                {postItem?.company?.company_name}
              </Link>
              {postItem?.company?.verify && <VerifiedIcon color="black" />}
            </div>
            <small className="text-gray-400 lowercase">
              @{postItem.user.first_name} • {timestamp}
            </small>
          </section>
        </section>

        {postItem?.user?.id === currentUser?.id && (
          <MoreOptions className="shrink-0">
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
        )}
      </header>

      <FormatPostText
        text={postItem.body}
        postId={postItem.id}
        isSinglePost={isSinglePost}
      />

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
          size={30}
          array={postItem.likes.slice(0, 5).map((post) => ({
            name: `${post.user.first_name} ${post.user.last_name}`,
            src: baseURL + post.user.avatar,
            href: "/",
          }))}
          sizeVariant="sm"
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

  const handleComment = useCallback(async () => {
    if (comment.trim().length < 1) return;

    setLoading(true);
    try {
      const { id } = await commentOnPost(postItem.id, postItem, comment);
      if (id) toast.success("Comment has been added");

      setRefetchInterval(1000);
      setTimeout(() => setRefetchInterval(false), 2000);
      setComment("");
    } catch (error) {
      toast.error("Failed to submit the comment. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [comment, postItem, setRefetchInterval]);

  useEffect(() => {
    if (!showCommentSection) setComment("");
  }, [showCommentSection]);

  return (
    <section
      className={clsx("overflow-hidden transition-all duration-300", {
        "mt-4": showCommentSection,
        "h-0 opacity-0": !showCommentSection,
      })}
    >
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Comments</h2>
        <CloseButton
          className="!text-xs"
          onClick={() => setShowCommentSection(false)}
        />
      </div>

      {commentsData.map((comment) => (
        <MemoizedCommentBlock
          key={comment.id}
          comment={comment}
          postUserId={postItem.user.id}
        />
      ))}

      <div className="mt-4 border-t pt-4 relative">
        <ReactQuill
          value={comment}
          onChange={(value) => setComment(value === "<p><br></p>" ? "" : value)}
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

const CommentBlock = ({ comment, postUserId }) => {
  const timestamp = timeAgo(comment.commented_at);

  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <Avatar
          name={`${comment.user.first_name} ${comment.user.last_name}`}
          className="!size-8"
          src={`${baseURL}${comment.user.avatar}`}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h5 className="font-bold text-sm">
              {comment.user.first_name} {comment.user.last_name}
              {comment.user.id === postUserId && (
                <span className="text-[.65rem] text-gray-400 font-medium">
                  (author)
                </span>
              )}
            </h5>
            <span className="text-gray-400 text-xs">&bull; {timestamp}</span>
          </div>
          <MarkdownComponent
            markdownContent={comment.content}
            className="text-sm text-gray-600 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

const MemoizedCommentBlock = memo(CommentBlock);

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
        {IconName && (
          <IconName className="xs:!size-4 !size-6 max-xs:!text-xl" />
        )}
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
