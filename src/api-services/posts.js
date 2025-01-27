import { makeApiRequest } from "../lib/helpers";
import { getCurrentUser } from "./users";

export const getPosts = async () => {
  const { results: posts } = await makeApiRequest({
    url: `api/posts/`,
    method: "GET",
  });

  return posts.filter((post) => post.status.toUpperCase() === "PUBLISHED");
};

export const createPost = async (formData) => {
  const post = await makeApiRequest({
    url: `api/posts/`,
    method: "POST",
    data: formData,
    contentType: "multipart/form-data",
  });

  return post;
};

export const editPost = async (id, body, postItem) => {
  console.log(body);

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

export const getLikes = async () => {
  const { results } = await makeApiRequest({
    url: `api/likes/`,
    method: "GET",
  });

  return results;
};



export const likePost = async (id, data) => {
  const allPosts = await getPosts();

  const currentUser = await getCurrentUser();

  const currentPost = allPosts.find((post) => post.id === id);

  if (currentPost.likes.find((post) => post.user.id === currentUser.id)) {
    await makeApiRequest({
      url: `api/posts/${id}/unlike/`,
      method: "POST",
      // data: { ...data, company_id: data.company.id },
    });

    return;
  }
  await makeApiRequest({
    url: `api/posts/${id}/like/`,
    method: "POST",
    // data: { ...data, company_id: data.company.id },
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
