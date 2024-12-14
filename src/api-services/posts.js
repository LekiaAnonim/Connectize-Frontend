import { toast } from "sonner";
import { makeApiRequest } from "../lib/helpers";
import { getCurrentUser } from "./users";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts.filter((post) => post.status.toUpperCase() === "PUBLISHED");
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
  const toastId = toast.info("processing like action...");
  const allPosts = await getPosts();

  const currentUser = await getCurrentUser();

  const currentPost = allPosts.find((post) => post.id === id);

  if (currentPost.likes.find((post) => post.user.id === currentUser.id)) {
    await makeApiRequest({
      url: `api/posts/${id}/unlike/`,
      method: "POST",
      data: { ...data, company_id: data.company.id },
    });
    toast.success("Post has been unlike", { id: toastId });
    return;
  }
  await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
    data: { ...data, company_id: data.company.id },
  });
  toast.success("Post has been liked", { id: toastId });
};

export const commentOnPost = async (id, data, comment) => {
  const result = await makeApiRequest({
    url: `api/posts/${id}/comment/`,
    method: "POST",
    data: { ...data, company_id: data.company.id, comment },
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
