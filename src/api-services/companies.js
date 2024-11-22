import { makeApiRequest } from "../lib/helpers";

// {
//     "company_name": "",
//     "organization_type": null,
//     "about": "",
//     "tag_line": "",
//     "company_size": null,
//     "logo": null,
//     "banner": null,
//     "email": "",
//     "office_address": "",
//     "country": "",
//     "state": "",
//     "city": "",
//     "website": "",
//     "verify": false
// }

export const getCompanies = async () => {
  const { results } = await makeApiRequest({
    url: `api/companies/`,
    method: "GET",
  });

  return results || [];
};

export const createCompany = async (data) => {
  await getOrCreateCompanyCategories(data.organization_type);
  await getOrCreateCompanySize(data.company_size);

  if (!data.organization_type === undefined || data.company_size === undefined)
    throw new Error("Please return organization_type or company_size");

  const { results } = await makeApiRequest({
    url: `api/companies/`,
    method: "POST",
    data,
  });

  return results;
};

export const getOrCreateCompanyCategories = async (name) => {
  const { results } = await makeApiRequest({
    url: `api/company-categories/`,
    method: "GET",
  });

  console.log("Categories result: ", results);

  if (results.filter((data) => data.name === name)) return;

  return await makeApiRequest({
    url: `api/company-categories/`,
    method: "POST",
    data: { name },
  });
};
export const getOrCreateCompanySize = async (size) => {
  const { results } = await makeApiRequest({
    url: `api/company-sizes/`,
    method: "GET",
  });

  console.log("Company Size result: ", results);

  if (results.filter((data) => data.size === size)) return;

  return await makeApiRequest({
    url: `api/company-categories/`,
    method: "POST",
    data: { size },
  });
};
