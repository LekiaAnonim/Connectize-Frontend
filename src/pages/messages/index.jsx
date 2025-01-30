import React, { useState, useMemo, useCallback, useEffect } from "react";
import Favorites from "../../components/messages/Favorites";
import MessagesList from "../../components/messages/MessagesList";
import { CreateNewLink } from "../../components/admin/markets/carousel";
import { useAuth } from "../../context/userContext";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api-services/users";
import ReusableModal from "../../components/custom/ResusableModal";
import LightParagraph from "../../components/ParagraphText";
import { Avatar } from "@chakra-ui/react";
import { avatarStyle } from "../../components/ResponsiveNav";
import Username from "../../components/Username";
import { CircleTitleSubtitleSkeleton } from "../../components/admin/feeds/TopServiceSuggestions";
import { ChatSellerLink } from "../../components/admin/markets/newlyListed";
import { UserSearchInput } from "../../components/representatives/UserSearchInput";
import { debounce } from "lodash";

export default function MessagesPage() {
  const { user: currentUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: !!currentUser,
  });

  const debouncedSetUsername = useCallback(
    () => debounce((value) => setUsername(value), 300),
    []
  );

  const handleUsernameChange = (value) => {
    debouncedSetUsername(value);
  };

  const filteredUsers = useMemo(() => {
    return (
      users?.filter((user) => {
        const isCurrentUser = user?.id !== currentUser?.id;
        const hasDetails = user?.first_name || user?.last_name;
        const formattedUsername = username.toLowerCase();
        if (username.length > 0) {
          return (
            isCurrentUser &&
            hasDetails &&
            (user?.first_name?.toLowerCase().includes(formattedUsername) ||
              user?.last_name?.toLowerCase().includes(formattedUsername) ||
              user?.email?.toLowerCase().includes(formattedUsername) ||
              user?.country?.toLowerCase().includes(formattedUsername))
          );
        }
        return isCurrentUser && hasDetails;
      }) || []
    );
  }, [users, username, currentUser?.id]);

  useEffect(() => {
    document.title = "Messaging in connectize";
  });
  return (
    <>
      <CreateNewLink
        text="Start new chat"
        url=""
        onClick={() => setIsOpen(true)}
      />
      <Favorites />
      <MessagesList />

      <ReusableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footerContent={<></>}
        title="Start New Chat"
      >
        <UserSearchInput
          username={username}
          setUsername={handleUsernameChange}
        />
        {usersLoading ? (
          Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <CircleTitleSubtitleSkeleton />
            </div>
          ))
        ) : filteredUsers?.length <= 0 ? (
          <div className="mt-4 mx-2">
            <LightParagraph>No user found</LightParagraph>
          </div>
        ) : (
          filteredUsers.map((user) => {
            const { first_name, last_name, avatar, email: hashtag, id } = user;
            return (
              <li className="flex items-center gap-2.5 pt-2" key={id}>
                <Avatar
                  src={avatar}
                  name={`${first_name} ${last_name}`}
                  size="sm"
                  className={avatarStyle}
                />
                <div className="flex-1">
                  <Username user={user} />
                  <p className="text-sm text-gray-400 m-0">{hashtag}</p>
                </div>

                <ChatSellerLink
                  text="Chat"
                  to={`/messages/room_${currentUser?.id}_${user?.id}`}
                />
              </li>
            );
          })
        )}
      </ReusableModal>
    </>
  );
}
