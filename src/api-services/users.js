import { makeApiRequest } from "../lib/helpers";
import { getSession } from "../lib/session";

export const userServices = async ({ url, data, method, resetForm, type }) => {
  return await makeApiRequest({
    url: `/api/users/${url ? url + "/" : ""}`,
    data,
    method,
    resetForm,
    type,
  });
};

export const getAllUsers = async () => await userServices();

export const getSuggestedUsersForCurrentUser = async () => {
  const { user: currentUser } = getSession();

  const allUsers = await getAllUsers();

  const allUsersInLocation = allUsers.filter(
    (user) =>
      user.first_name && (user.city || user.region === currentUser.region)
  );
  return allUsersInLocation;
};
