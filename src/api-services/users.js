import { makeApiRequest } from "../lib/helpers";

export const getAllUsers = async () => {
  const { results } = await makeApiRequest({
    url: `api/users/`,
    method: "GET",
  });

  return results;
};

export const getCurrentUser = async () => {
  const currentUser = await makeApiRequest({
    url: `api/current-user/`,
    method: "GET",
  });

  return currentUser;
};

export const getSuggestedUsersForCurrentUser = async () => {
  const currentUser = await getCurrentUser();

  const allUsers = await getAllUsers();

  const allUsersInLocation = allUsers.filter(
    (user) =>
      currentUser.id !== user.id &&
      user.first_name &&
      (user.city === currentUser.city ||
        user.region === currentUser.region ||
        user.country === currentUser.country)
  );

  return allUsersInLocation || allUsers.splice(0, 10); // allUsersInLocation ||
};

// get and create user

export const getOrCreateGender = async (gender) => {
  const { results } = await makeApiRequest({
    url: "api/genders",
    method: "GET",
  });

  if (
    results?.filter((data) => data.type.toLowerCase() === gender.toLowerCase())
      .length > 0 ||
    gender === undefined
  )
    return results;

  return await makeApiRequest({
    url: "api/genders",
    method: "POST",
    data: { type: gender },
  });
};
