import { toast } from "sonner";
import { goToLogin, makeApiRequest } from "../lib/helpers";
import { capitalizeFirst } from "../lib/utils";

export const getAllUsers = async () => {
  const { results } = await makeApiRequest({
    url: `api/users/`,
    method: "GET",
  });

  return results;
};

export const getUserById = async (id) => {
  const results = await makeApiRequest({
    url: `api/users/${id}`,
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

  return await makeApiRequest({
    url: `api/users/${currentUser.id}/`,
    contentType: "multipart/form-data",
    method: "PUT",
    data: {
      ...currentUser,
      first_name: capitalizeFirst(values.first_name),
      last_name: capitalizeFirst(values.last_name),
      gender: values.gender,
      date_of_birth: values.age,
      bio: values.bio,
      role: values.role,
      is_first_time_user:
        values.first_name &&
        values.last_name &&
        values.gender &&
        values.age &&
        values.role &&
        values.nationality &&
        values.state
          ? false
          : true,
      country: values.nationality,
      city: values.state,
      region: values.state,
      phone_number: values.phone_number,
      address: values.company_address,
      avatar: values.image,
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
    url: "api/genders/",
    method: "GET",
  });

  if (results?.filter((data) => data.type === gender).length > 0 || !gender)
    return results;

  return await makeApiRequest({
    url: "api/genders/",
    method: "POST",
    data: { type: gender },
  });
};

export const logOutCurrentUser = () => goToLogin();

export const connectWithUser = async (id) => {
  // const currentUser = await getCurrentUser();

  //  const allUsers = await getAllUsers();

  //  if (allUsers.likes.find((user) => user.user.id === currentUser.id)) {
  //    await makeApiRequest({
  //      url: `api/users/${id}/unfollow/`,
  //      method: "POST",
  //    });

  //    return;
  //  }
  return await makeApiRequest({
    url: `api/users/${id}/follow/`,
    method: "POST",
  });
};
