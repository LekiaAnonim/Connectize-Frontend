import { makeApiRequest } from "../lib/helpers";

export const getServices = async () => {
  const { results } = await makeApiRequest({
    url: `api/services/`,
    method: "GET",
  });

  return results;
};
export const getServiceImages = async () => {
  const { results } = await makeApiRequest({
    url: `api/service-images/`,
    method: "GET",
  });

  return results;
};
export const getServiceCategories = async () => {
  const { results } = await makeApiRequest({
    url: `api/service-categories/`,
    method: "GET",
  });

  return results || [];
};
