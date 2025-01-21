import { makeApiRequest } from "../lib/helpers";
import { toast } from "sonner";

export const getAllRepresentatives = async ({
  company_id = null,
  status = null,
}) => {
  const params = company_id ? { company_id } : status ? { status } : null;

  const { results } = await makeApiRequest({
    url: `api/representatives/`,
    method: "GET",
    params,
  });

  return results;
};

export const assignRepresentative = async (rep) => {
  if (!rep.user || !rep.role) {
    toast.info("Incomplete representative data");
    return;
  }

  const category = await getOrCreateRepresentativeCategory({
    type: rep.role.toLowerCase(),
  });

  const results = await makeApiRequest({
    url: `api/representatives/`,
    method: "POST",
    data: {
      user: rep.user.id,
      company: rep.company.id,
      category,
      slug: `${rep.user.first_name}_${rep.role.replaceAll(" ", "_")}_${
        rep.company.id
      }_${rep.user.id}`,
    },
  });

  if (results?.category) {
    toast.success(
      `${rep.user.first_name} ${rep.user.last_name} has been sent an invitation to represent your company as ${rep.role}`
    );
  }

  return results;
};

export const getOrCreateRepresentativeCategory = async ({ type, id }) => {
  const { results } = await makeApiRequest({
    url: "api/representative-categories/",
    method: "GET",
  });
  if (!type && !id) return results;

  if (id) return results.find((data) => data?.id === id);

  let existingCategory = results.find(
    (data) => data.type.toLowerCase() === type
  );

  if (!existingCategory) {
    existingCategory = await makeApiRequest({
      url: "api/representative-categories/",
      method: "POST",
      data: { type },
    });
  }

  return existingCategory.id;
};

export const changeRepStatus = async (id, repData) => {
  const results = await makeApiRequest({
    url: `api/representatives/${id}/`,
    method: "PUT",
    data: {
      user: repData.user,
      company: repData.company,
      category: repData.category,
      status: repData.status,
    },
  });

  if (results?.category) {
    toast.success(
      `Representative status has been changed to ${repData.status}`
    );
  }

  return results;
};
