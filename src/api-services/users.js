import { toast } from "sonner";
import { makeApiRequest } from "../lib/helpers";
import { capitalizeFirst } from "../lib/utils";

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

  return currentUser || null;
};

export const updateCurrentUserInfo = async (values) => {
  const currentUser = await getCurrentUser();

  if (!values || !values.gender) {
    toast.info("Incomplete profile information");
    return;
  }

  await getOrCreateGender(values.gender);

  await makeApiRequest({
    url: `api/users/${currentUser.id}/`,
    method: "PUT",
    data: {
      first_name: capitalizeFirst(values.first_name),
      last_name: capitalizeFirst(values.last_name),
      gender: values.gender,
      date_of_birth: values.age,
      bio: values.bio,
      role: values.role,
      is_first_time_user: false,
      country: values.nationality,
      city: values.state,
      region: values.state,
      phone_number: values.phone_number,
      address: values.company_address,
      avatar: null,
    },
  });
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
        user.country === currentUser.country ||
        user)
  );

  return allUsersInLocation;
};

// get and create user

export const getOrCreateGender = async (gender) => {
  const { results } = await makeApiRequest({
    url: "api/genders",
    method: "GET",
  });

  if (results?.filter((data) => data.type === gender).length > 0 || !gender)
    return results;

  return await makeApiRequest({
    url: "api/genders",
    method: "POST",
    data: { type: gender },
  });
};
