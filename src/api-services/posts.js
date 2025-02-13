import { toast } from "sonner";
import { makeApiRequest } from "../lib/helpers";
import { getCompanies } from "./companies";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts.filter((post) => post.status.toUpperCase() === "PUBLISHED");
};

export const createPost = async (formData) => {
  const companies = await getCompanies();
  const company = companies?.[0];

  console.log(formData.get("message"));

  if (!formData.get("message")) {
    toast.info("Something went wrong. Please refresh page or contact support");
    return;
  }
  if (!company) {
    toast.info(
      "You have no company associated with your profile, please create one"
    );
    return;
  }

  const post = await makeApiRequest({
    url: `api/posts/`,
    method: "POST",
    data: { ...formData, company: company?.id },
    contentType: "multipart/form-data",
  });

  return post;
};

export const editPost = async (id, body, postItem) => {
  const post = await makeApiRequest({
    url: `api/posts/${id}/`,
    method: "PUT",
    data: {
      body,
      ...postItem,
    },
  });

  return post;
};

export const deletePost = async (id) => {
  const post = await makeApiRequest({
    url: `api/posts/${id}/`,
    method: "DELETE",
  });

  return post;
};

export const likePost = async (id, data, hasLikedPost) => {
  if (hasLikedPost) {
    await makeApiRequest({
      url: `api/posts/${id}/unlike/`,
      method: "POST",
    });

    return;
  }
  await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
  });
};

export const commentOnPost = async (id, data, comment) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/comment/`,
    method: "POST",
    data: { ...data, company_id: data.company.id, comment },
  });

  return result;
};
