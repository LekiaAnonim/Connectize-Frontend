import { makeApiRequest } from "../lib/helpers";
import { getSession } from "../lib/session";

export const getAllUsers = async () => {
  const { results } = await makeApiRequest({
    url: `api/users/`,
    method: "GET",
  });

  return results;
};

export const getSuggestedUsersForCurrentUser = async () => {
  const currentUser = getSession();

  const allUsers = await getAllUsers();

  const allUsersInLocation = allUsers.filter(
    (user) =>
      user.first_name &&
      (user.city === currentUser.city || user.region === currentUser.region)
  );

  return allUsersInLocation;
};

// get and create user

export const getOrCreateGender = async (gender) => {
  const { results } = await makeApiRequest({
    url: "api/genders",
    method: "GET",
  });

  if (
    results.filter((data) => data.type.toLowerCase() === gender.toLowerCase())
  )
    return;

  return await makeApiRequest({
    url: "api/genders",
    method: "POST",
    data: { type: gender },
  });
};
