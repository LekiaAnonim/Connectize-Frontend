import { makeApiRequest } from "../lib/helpers";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts;
};

export const createPost = async (body, companyId) => {
  const post = await makeApiRequest({
    url: `api/posts/`,
    method: "POST",
    data: { body, company: companyId },
  });

  return post;
};

export const getLikes = async () => {
  const { results } = await makeApiRequest({
    url: `api/likes/`,
    method: "GET",
  });

  return results;
};

export const likePost = async (id) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
  });

  return result;
};

export const commentOnPost = async (id) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
  });

  return result;
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
