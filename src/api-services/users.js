import { makeApiRequest } from "../lib/helpers";
import { getSession } from "../lib/session";

export const getAllUsers = async () => {
  const { results } = await makeApiRequest({
    url: `api/users/`,
    method: "GET",
  });

  return results;
};

export const getCompanies = async () => {
  const { results } = await makeApiRequest({
    url: `api/companies/`,
    method: "GET",
  });

  return results;
};

export const getSuggestedUsersForCurrentUser = async () => {
  const { user: currentUser } = getSession();

  console.log(currentUser);

  const allUsers = await getAllUsers();

  const allUsersInLocation = allUsers.filter(
    (user) =>
      user.first_name &&
      (user.city === currentUser.city || user.region === currentUser.region)
  );
  return allUsersInLocation;
};

