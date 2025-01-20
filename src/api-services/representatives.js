import { makeApiRequest } from "../lib/helpers";
import { toast } from "sonner";

export const getAllRepresentatives = async () => {
  const { results } = await makeApiRequest({
    url: `api/representatives/`,
    method: "GET",
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
      user: rep.user,
      company: rep.company,
      company_id: rep.company.id,
      category,
      status: false,
      slug: `${rep.role.replaceAll(" ", "-")}_${rep.company.id}_${rep.user.id}`,
    },
  });

  return results;
};

const getOrCreateRepresentativeCategory = async (category) => {
  if (!category) return null;

  const { results } = await makeApiRequest({
    url: "api/representative-categories/",
    method: "GET",
  });

  const existingCategory = results.find(
    (data) => data.type.toLowerCase() === category
  );

  if (existingCategory) return existingCategory.type;

  const newCategory = await makeApiRequest({
    url: "api/representative-categories/",
    method: "POST",
    data: { type: category },
  });

  return newCategory.type;
};
