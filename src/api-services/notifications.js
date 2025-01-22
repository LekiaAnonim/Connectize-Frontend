import { makeApiRequest } from "../lib/helpers";

export const getNotificationsForUser = async () => {
  const { results: notifications } = await makeApiRequest({
    url: "api/notifications/",
    method: "GET",
  });

  return notifications;
};

export const markNotificationAsRead = async (notificationId) => {
  const notifications = await makeApiRequest({
    url: `api/notifications/${notificationId}/mark-as-read/`,
    method: "POST",
  });

  return notifications;
};
export const markAllNotificationsAsRead = async () => {
  const notifications = await makeApiRequest({
    url: "api/notifications/mark-all-as-read/",
    method: "POST",
  });

  return notifications;
};
