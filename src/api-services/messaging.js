import { makeApiRequest } from "../lib/helpers";

export const getMessagesForUser = async (params) => {
  const { results: notifications } = await makeApiRequest({
    url: "api/messages/",
    method: "GET",
    params,
  });

  return notifications;
};
