import clsx from "clsx";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { Notification } from "../icon";
import { avatarStyle } from "./ResponsiveNav";
import {
  getNotificationsForUser,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "../api-services/notifications";
import { useQuery } from "@tanstack/react-query";
import TimeAgo from "./TimeAgo";
import { useEffect, useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import CustomTabs from "./custom/tabs";
import { getAllCompanies } from "../api-services/companies";
import { getAllUsers } from "../api-services/users";
import CompanyName from "./company/CompanyName";
import { useAuth } from "../context/userContext";
import useWebSocket from "../hooks/useWebSocket";

const generalNotificationType = [
  "like",
  "comment",
  "reply",
  "follow",
  "bookmark",
  "favorite",
  "connection",
  "representation",
];

const promotionsNotificationType = ["promotions", "announcement"];

const NotificationPopOver = () => {
  const { messages } = useWebSocket("notifications");
  const { user: currentUser } = useAuth();
  const { data: notificationsData, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationsForUser,
    // refetchInterval: 20000,
  });

  const { data: companies, isLoading: companiesLoading } = useQuery({
    queryKey: ["allConnectizeCompanies"],
    queryFn: getAllCompanies,
    enabled: !!currentUser,
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: !!currentUser,
  });

  const notifications = [...messages, ...notificationsData];

  const notificationLengthNotRead =
    notifications?.filter((notification) => notification?.is_read === null)
      ?.length || 0;

  const [unReadNotificationLength, setUnReadNotificationLength] = useState(
    notificationLengthNotRead
  );

  useEffect(() => {
    setUnReadNotificationLength(notificationLengthNotRead);
  }, [notificationLengthNotRead]);

  const tabsHeader = ["General", "Promotions"];

  const generalNotifications = notifications?.filter((notification) =>
    generalNotificationType.includes(notification.notification_type)
  );
  const promotionsNotifications = notifications?.filter((notification) =>
    promotionsNotificationType.includes(notification.notification_type)
  );

  const handleMarkAllAsRead = useCallback(async () => {
    setUnReadNotificationLength(0);
    await markAllNotificationsAsRead();
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <button className="relative">
          {unReadNotificationLength > 0 && (
            <Badge className="absolute -top-1.5 -right-1 size-4 !text-[.6rem] !bg-gold !rounded-full grid place-items-center">
              <span>{unReadNotificationLength}</span>
            </Badge>
          )}
          <Notification />
        </button>
      </PopoverTrigger>

      <PopoverContent className="mx-2 xs:!w-[350px] lg:!w-[400px]">
        <PopoverArrow />
        {isLoading || companiesLoading || usersLoading ? (
          <NotificationsSkeleton />
        ) : (
          <section className={clsx("bg-white rounded p-3 space-y-2 w-full")}>
            <header className="flex justify-between items-center gap-2 border-b border-gray-100 pb-1">
              <h4 className="text-lg font-semibold">Notifications</h4>
              {unReadNotificationLength > 0 && (
                <button
                  className="text-gray-500 hover:text-black transition-colors duration-300 hover:underline !text-xs disabled:cursor-not-allowed disabled:no-underline"
                  onClick={handleMarkAllAsRead}
                >
                  Mark all as read
                </button>
              )}
            </header>

            <CustomTabs
              tabsHeading={tabsHeader}
              tabsPanels={[
                <NotificationsArray
                  key="general"
                  fallback="general"
                  notifications={generalNotifications}
                  setUnReadNotificationLength={setUnReadNotificationLength}
                  companies={companies}
                  users={users}
                />,
                <NotificationsArray
                  key="promotions"
                  notifications={promotionsNotifications}
                  setUnReadNotificationLength={setUnReadNotificationLength}
                  fallback="promotion"
                  companies={companies}
                  users={users}
                />,
              ]}
            />
          </section>
        )}
      </PopoverContent>
    </Popover>
  );
};

const NotificationsArray = memo(
  ({
    notifications = [],
    setUnReadNotificationLength,
    fallback,
    companies,
    users,
  }) => {
    return (
      <section className="space-y-2 py-2 overflow-y-auto overflow-x-hidden max-h-[60vh] scrollbar-hidden divide-y divide-gray-100">
        {notifications.length <= 0 ? (
          <p className="text-sm text-gray-400 text-center my-5">
            No {fallback} notifications yet...
          </p>
        ) : (
          notifications?.map((notification, index) => {
            const user = users?.find(
              (user) => user?.id === notification?.sender
            );

            const company = companies?.results?.find(
              (company) => company?.profile === user?.email
            );
            return (
              <NotificationTile
                key={notification?.id}
                index={index}
                company={company}
                notification={notification}
                setUnReadNotificationLength={setUnReadNotificationLength}
              />
            );
          })
        )}
      </section>
    );
  }
);

const NotificationTile = memo(
  ({ notification, index, setUnReadNotificationLength, company }) => {
    const [read, setRead] = useState(notification?.is_read ? true : false);

    const handleMarkAsRead = useCallback(async () => {
      if (read) return;
      setUnReadNotificationLength((prev) => prev - 1);
      setRead(true);
      await markNotificationAsRead(notification?.id);
    }, [read, notification?.id, setUnReadNotificationLength]);

    return (
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        viewport={{ once: true }}
        className="flex items-start gap-2 pt-2"
      >
        <Avatar
          src={company?.logo || "/images/default-company-logo.png"}
          alt={company?.company_name}
          size="sm"
          name={company?.company_name}
          className={avatarStyle}
        />
        <div className="space-y-0">
          <CompanyName
            name={company?.company_name}
            verified={company?.verify}
          />
          <Link
            to={notification?.link}
            onClick={handleMarkAsRead}
            className="text-[.825rem] !text-gray-600 leading-none block"
          >
            {notification?.message}{" "}
            <Badge className="!text-[.6rem]">{read ? "" : "Unread"}</Badge>
          </Link>
          <div className="flex items-center gap-2">
            <small className="text-gray-400 text-[.69rem]">
              <TimeAgo time={notification?.timestamp} />
            </small>

            {!read && (
              <button
                onClick={handleMarkAsRead}
                className="text-xs disabled:cursor-not-allowed"
              >
                Mark as read
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);

const NotificationsSkeleton = () => {
  return (
    <div
      className={clsx("bg-white rounded p-3 space-y-4 w-full min-w-[300px]")}
    >
      <header className="flex justify-between items-center gap-2 border-b border-gray-100 pb-1">
        <div className="h-5 w-32 rounded skeleton" />
        <div className="h-4 w-24 rounded skeleton" />
      </header>
      <div className="space-y-4 overflow-y-auto max-h-[70vh]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-start gap-2">
            {/* Avatar Skeleton */}
            <div className="rounded-full size-8 shrink-0 skeleton" />
            {/* Content Skeleton */}
            <div className="space-y-1 w-full">
              <div className="h-3 w-3/5 rounded skeleton" />
              <div className="h-2.5 w-full rounded skeleton" />
              <div className="h-2.5 w-4/5 rounded skeleton" />
              <div className="h-2 w-20 rounded skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NotificationPopOver, NotificationsArray };
