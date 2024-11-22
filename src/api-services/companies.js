import { makeApiRequest } from "../lib/helpers";

export const getCompanies = async () => {
  const { results } = await makeApiRequest({
    url: `api/companies/`,
    method: "GET",
  });

  return results;
};
export const getCompanyCategories = async () => {
  const { results } = await makeApiRequest({
    url: `api/company-categories/`,
    method: "GET",
  });

  return results;
};
export const getCompanySizes = async () => {
  const { results } = await makeApiRequest({
    url: `api/company-sizes/`,
    method: "GET",
  });

  return results;
};
