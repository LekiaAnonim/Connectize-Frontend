import { motion } from "framer-motion";
import { useAuth } from "../../context/userContext";
import { getAllUsers } from "../../api-services/users";
import { useQuery } from "@tanstack/react-query";
import LightParagraph from "../ParagraphText";
import { Link } from "react-router-dom";
import clsx from "clsx";
import TimeAgo from "../TimeAgo";
import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { avatarStyle } from "../ResponsiveNav";
import { ButtonWithTooltipIcon } from "../admin/feeds/DiscoverPosts";
import { VoiceNotePlayer } from "./MessageControl";

export default function MessageArea({ messages, messagesLoading }) {
  const { user: currentUser } = useAuth();

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: !!currentUser,
  });

  const reversedMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  const scrollToBottom = () => {
    const chatContainer = document.querySelector(".chat-container");

    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <section className="chat-container flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-y-2 pb-4 relative scroll-smooth">
      {messagesLoading || usersLoading ? (
        <SkeletonChatMessages />
      ) : messages?.length <= 0 ? (
        <div className="h-full flex items-center justify-center flex-col gap-2">
          <LightParagraph>No messages yet</LightParagraph>
          <Link
            to="/messages"
            className="!text-sm bg-gold px-4 py-1 rounded-full hover:bg-opacity-60"
          >
            See all messages
          </Link>
        </div>
      ) : (
        <>
          {reversedMessages.map((message, index) => {
            const sender = users?.find((user) => user?.id === message?.sender);

            const isCurrentUser = currentUser?.id === message.sender;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx("w-full p-3 flex gap-2.5", {
                  "self-end flex-row-reverse": isCurrentUser,
                  "items-end": !isCurrentUser,
                })}
              >
                <Link to={`/co/${sender?.id}`}>
                  <Avatar
                    name={
                      isCurrentUser
                        ? `${currentUser?.first_name} ${currentUser?.last_name}`
                        : `${sender?.first_name} ${sender?.last_name}`
                    }
                    src={isCurrentUser ? currentUser?.avatar : sender?.avatar}
                    size="sm"
                    className={avatarStyle}
                  />
                </Link>
                <div
                  className={clsx(
                    "!shrink-0 !w-fit !max-w-[75%] xs:text-sm bg-white rounded-md p-3 flex flex-col",
                    {
                      "items-end": isCurrentUser,
                    }
                  )}
                >
                  <p>{message?.content}</p>

                  {message.audio_file && (
                    <VoiceNotePlayer audioURL={message.audio_file} />
                  )}
                  <div className="text-gray-400 text-[.7rem] flex gap-1 items-center shrink-0">
                    <small className="shrink-0">
                      <TimeAgo time={message.timestamp} />
                    </small>
                    <small>&bull;</small>
                    <small className="shrink-0">
                      {sender?.first_name} {sender?.last_name}
                    </small>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </>
      )}
      {
        <ButtonWithTooltipIcon
          IconName={ArrowDownIcon}
          tip="scroll down"
          onClick={scrollToBottom}
          className="fixed top-20 right-5 hover:bg-gray-200 rounded-full p-1.5"
        />
      }
    </section>
  );
}

const SkeletonChatMessages = () => {
  return Array.from({ length: 10 }, (_, index) => {
    const isEven = index % 2;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={index}
        className={clsx("w-full p-3 flex gap-2.5", {
          "self-end flex-row-reverse": isEven,
          "items-end": !isEven,
        })}
      >
        {/* Avatar Skeleton */}
        <div className="size-10 skeleton rounded-full" />

        {/* Message Skeleton */}
        <div
          className={clsx(
            "!shrink-0 !w-fit !max-w-[75%] xs:text-sm bg-white rounded-md p-3 flex flex-col",
            {
              "items-end": isEven,
            }
          )}
        >
          {/* Placeholder for message text */}
          <div className="w-36 h-2 skeleton rounded-md mb-2" />

          {/* Placeholder for time and sender */}
          <div className="flex gap-1 items-center shrink-0">
            <div className="w-12 h-2 skeleton rounded-md" />
            <small className="text-gray-300">&bull;</small>
            <div className="w-16 h-2 skeleton rounded-md" />
          </div>
        </div>
      </motion.div>
    );
  });
};
