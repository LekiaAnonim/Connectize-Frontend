import React, { useMemo } from "react";
import HeadingText from "../HeadingText";
import { useQuery } from "@tanstack/react-query";
import { getMessagesForUser } from "../../api-services/messaging";
import { getAllUsers } from "../../api-services/users";
import { useAuth } from "../../context/userContext";
import LightParagraph from "../ParagraphText";
import { motion } from "framer-motion";
import { Avatar } from "@chakra-ui/react";
import { avatarStyle } from "../ResponsiveNav";
import { Link } from "react-router-dom";
import Username from "../Username";
import TimeAgo from "../TimeAgo";

export default function MessagesList() {
  const { user: currentUser } = useAuth();
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessagesForUser,
    enabled: !!currentUser,
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: !!currentUser,
  });

  // const { messages: ws_messages } = useWebSocket("chat");

  const allMessages = useMemo(() => [...messages], [messages]);

  const messagesList = useMemo(() => {
    return Array.from(
      new Set(
        allMessages
          ?.filter((msg) => msg.recipient !== currentUser?.id)
          .map((msg) => msg?.recipient)
      ),
      (recipient) =>
        allMessages?.find((message) => message?.recipient === recipient)
    );
  }, [allMessages, currentUser]);

  return (
    <section>
      <HeadingText heading="sub-heading" weight="semibold">
        Recent Chats
      </HeadingText>

      <section className="flex flex-col gap-2 divide-y mb-4 divide-gray-200/70">
        {isLoading || usersLoading ? (
          <MessagesListSkeleton />
        ) : messagesList?.length <= 0 ? (
          <section className="mb-8">
            <LightParagraph>No messages yet</LightParagraph>
          </section>
        ) : (
          messagesList?.map((message) => {
            const user = users?.find((user) => user?.id === message?.recipient);
            return (
              <MessagesListTile
                key={message?.id}
                message={message}
                user={user}
              />
            );
          })
        )}
      </section>
    </section>
  );
}

const MessagesListTile = React.memo(({ message, user }) => {
  const name = `${user?.first_name} ${user?.last_name}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      key={message?.id}
      className="flex gap-2 pt-2"
    >
      <Link to={`/co/${user?.id}`}>
        <Avatar name={name} src={`${user?.avatar}`} className={avatarStyle} />
      </Link>

      <Link
        to={`/messages/room_${message?.sender}_${message?.recipient}`}
        className="flex-1"
      >
        <Username user={user} />
        <div className="line-clamp-2">
          <LightParagraph>{message?.content} </LightParagraph>
        </div>
      </Link>
      <div className="flex justify-end items-end text-[.7rem] text-gray-400">
        <TimeAgo time={message?.timestamp} />
      </div>
    </motion.section>
  );
});

const MessagesListSkeleton = () => {
  return Array.from({ length: 5 }, (_, index) => {
    return (
      <section key={index} className="flex gap-2 pt-2">
        {/* Avatar Skeleton */}
        <div className="size-10 rounded-full skeleton" />

        {/* Message Content Skeleton */}
        <div className="flex-1 space-y-2">
          <div className="h-3 w-1/3 rounded skeleton" />
          <div className="h-2.5 w-full rounded skeleton" />
          <div className="h-2.5 w-2/3 rounded skeleton" />
        </div>

        {/* Timestamp Skeleton */}
        <div className="h-2 w-10 rounded skeleton" />
      </section>
    );
  });
};
