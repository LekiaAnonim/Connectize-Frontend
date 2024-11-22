import { makeApiRequest } from "../lib/helpers";

export const getAllPosts = async () => {
  const { results } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return results;
};
export const getLikes = async () => {
  const { results } = await makeApiRequest({
    url: `api/likes/`,
    method: "GET",
  });

  return results;
};
export const getComments = async () => {
  const { results } = await makeApiRequest({
    url: `api/comments/`,
    method: "GET",
  });

  return results;
};
export const getFollows = async () => {
  const { results } = await makeApiRequest({
    url: `api/follows/`,
    method: "GET",
  });

  return results;
};
