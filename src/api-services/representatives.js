import { makeApiRequest } from "../lib/helpers";
import { toast } from "sonner";

export const getAllRepresentatives = async ({
  company_id = null,
  status = null,
}) => {
  const params = {};
  if (company_id) params.company_id = company_id;
  if (status) params.status = status;

  const { results } = await makeApiRequest({
    url: `api/representatives/`,
    method: "GET",
    params: Object.keys(params).length ? params : null,
  });

  return results;
};

export const assignRepresentative = async (rep) => {
  if (!rep.user || !rep.role) {
    toast.info("Incomplete representative data");
    return;
  }

  const category = await getOrCreateRepresentativeCategory(
    rep.role.toLowerCase()
  );

  const results = await makeApiRequest({
    url: `api/representatives/`,
    method: "POST",
    data: {
      user: rep.user.id,
      company: rep.company.id,
      category,
      slug: `${rep.role.replaceAll(" ", "_")}_${rep.company.id}_${rep.user.id}`,
    },
  });

  if (results?.category) {
    toast.success(
      `${rep.user.first_name} ${rep.user.last_name} has been sent an invitation to represent your company as ${rep.role}`
    );
  }

  return results;
};

const getOrCreateRepresentativeCategory = async (category) => {
  if (!category) return null;

  const { results } = await makeApiRequest({
    url: "api/representative-categories/",
    method: "GET",
  });

  let existingCategory = results.find(
    (data) => data.type.toLowerCase() === category
  );

  if (!existingCategory) {
    existingCategory = await makeApiRequest({
      url: "api/representative-categories/",
      method: "POST",
      data: { type: category },
    });
  }

  return existingCategory.id;
};
