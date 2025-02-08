import { makeApiRequest } from "../lib/helpers";

export const getMessagesForUser = async (params) => {
  const { results: messages } = await makeApiRequest({
    url: "api/messages/",
    method: "GET",
    params,
  });

  return messages;
};

export const messageUser = async (formData) => {
  // {
  //     "sender": null,
  //     "recipient": null,
  //     "content": "",
  // }

  const message = await makeApiRequest({
    url: "api/messages/",
    method: "POST",
    data: formData,
    contentType: "multipart/form-data",
  });

  return message;
};

export const markMessageAsRead = async (room_name, user_id) => {
  const message = await makeApiRequest({
    url: "api/messages/mark_all_as_read",
    body: { room_name, user_id },
  });

  return message;
}; 