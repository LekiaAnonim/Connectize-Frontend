import React, { useState } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import { Avatar } from "@chakra-ui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api-services/users";
import { useAuth } from "../../context/userContext";
import { avatarStyle } from "../../components/ResponsiveNav";
import Username from "../../components/Username";
import { CircleTitleSubtitleSkeleton } from "../../components/admin/feeds/TopServiceSuggestions";
import RepRoleInput from "../../components/form/RepRoleInput";

export default function AssignRepresentative() {
  const [username, setUsername] = useState(null);

  const { user: currentUser } = useAuth();

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const filteredUsers = users?.filter((user) => {
    const thisUsername = (user?.first_name + user?.last_name)
      ?.toString()
      .toLowerCase();
    const currentUsername = (currentUser?.first_name + currentUser?.last_name)
      ?.toString()
      ?.toLowerCase();
    return (
      user?.first_name !== null &&
      currentUsername !== thisUsername &&
      thisUsername.includes(username?.toLowerCase().trim())
    );
  });

  return (
    <section>
      <section className="space-y-6">
        <div className="">
          <HeadingText>Assign Representatives</HeadingText>
          <LightParagraph>
            Assign representatives to manage your company on connectize and
            specify the role of representation{" "}
            <strong className="text-black">
              e.g (human resources, technical, commercial)
            </strong>
          </LightParagraph>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="username"
            className="text-base leading-none px-1 font-semibold w-fit"
          >
            Username
          </label>
          <div className="relative">
            <SearchOutlined className="size-4 text-gray-400 absolute left-4 z-30 top-1/2 -translate-y-1/2" />
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Find users"
              className={clsx(
                "w-full max-w-screen-xs py-1.5 px-3 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gold transition-all duration-300 indent-6"
              )}
            />
          </div>
          {username?.length > 1 && (
            <motion.small
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-400 px-1"
            >
              Search for: <strong className="text-black">{username}</strong>
            </motion.small>
          )}
        </div>

        {filteredUsers?.length > 0 && (
          <section className="">
            <HeadingText weight="semibold">Users</HeadingText>
            <section className="divide-y divide-gray-200/70">
              {isLoading
                ? Array.from({ length: 5 }, (item) => (
                    <CircleTitleSubtitleSkeleton key={item} />
                  ))
                : filteredUsers?.slice(0, 10).map((user) => (
                    <motion.section
                      key={user?.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex sm:items-center sm:justify-between max-sm:flex-col gap-4 mb-4 pt-4"
                    >
                      <div className="flex gap-2 items-center">
                        <Avatar
                          src={user?.avatar || ""}
                          name={user?.first_name + " " + user?.last_name}
                          size="md"
                          className={clsx(avatarStyle)}
                        />
                        <div className="flex flex-col">
                          <Username user={user} />

                          <small className="text-gray-400 !-my-1 line-clamp-2">
                            {user?.role}
                          </small>
                        </div>
                      </div>

                      <RepRoleInput user={user} />
                    </motion.section>
                  ))}
            </section>
          </section>
        )}

        <section className="flex flex-col">
          <HeadingText weight="semibold">Representatives</HeadingText>
          <section className="divide-y divide-gray-200/70">
            {filteredUsers?.map((user) => (
              <motion.section
                key={user?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex sm:items-center sm:justify-between max-sm:flex-col gap-4 mb-4 pt-4"
              >
                <div className="flex gap-2 items-center">
                  <Avatar
                    src={user?.avatar || ""}
                    name={user?.first_name + " " + user?.last_name}
                    size="md"
                    className={clsx(avatarStyle)}
                  />
                  <div className="flex flex-col">
                    <Username user={user} />

                    <small className="text-gray-400 !-my-1 line-clamp-2">
                      {user?.role}
                    </small>
                  </div>
                </div>
              </motion.section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}
