import { makeApiRequest } from "../lib/helpers";

export const getMessagesForUser = async (params) => {
  const { results: notifications } = await makeApiRequest({
    url: "api/messages/",
    method: "GET",
    params,
  });

  return notifications;
};

export const messageUser = async (data) => {
  // {
  //     "sender": null,
  //     "recipient": null,
  //     "content": "",
  // }
  const message = await makeApiRequest({
    url: "api/messages/",
    method: "POST",
    data,
  });

  return message;
};
