import { makeApiRequest } from "../lib/helpers";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts;
};

export const createPost = async (body, companyId, images) => {
  console.log(images);

  const post = await makeApiRequest({
    url: `api/posts/`,
    method: "POST",
    data: { body, company: companyId, images },
    contentType: "multipart/form-data",
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

export const likePost = async (id, data) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
    data,
  });

  return result;
};

export const commentOnPost = async (id) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/comment/`,
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
