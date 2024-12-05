import { makeApiRequest } from "../lib/helpers";
import { getCompanies } from "./companies";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts;
};

export const createPost = async (body) => {
  const companies = await getCompanies();

  const post = await makeApiRequest({
    url: `api/posts/`,
    method: "POST",
    data: { body, company: companies[0].id },
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
