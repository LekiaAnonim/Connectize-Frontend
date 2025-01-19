import { data } from "autoprefixer";
import { makeApiRequest } from "../lib/helpers";
import { toast } from "sonner";

export const getAllRepresentatives = async () => {
  const { results } = await makeApiRequest({
    url: `api/representatives/`,
    method: "GET",
  });

  return results;
};

export const createRepresentatives = async (rep) => {
  if (!rep.user || !rep.category) {
    toast.info("Incomplete representative data");
    return;
  }
  const category = await getOrCreateRepresentativeCategory(rep.role);

  const results = await makeApiRequest({
    url: `api/representatives/`,
    method: "POST",
    data: {
      user: rep.user,
      company: rep.company,
      category,
      status: false,
      slug: `${rep.role.replaceAll(" ", "-")}_${rep.company.id}_${rep.user.id}`,
    },
  });

  return results;
};

const getOrCreateRepresentativeCategory = async (category) => {
  const { results } = await makeApiRequest({
    url: "api/representative-categories/",
    method: "GET",
  });

  if (results?.filter((data) => data.type === category).length > 0 || !category)
    return results;

  return await makeApiRequest({
    url: "api/representative-categories/",
    method: "POST",
    data: { type: category },
  });
};
