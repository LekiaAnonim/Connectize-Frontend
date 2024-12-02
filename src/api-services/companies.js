import { makeApiRequest } from "../lib/helpers";
import { getSession } from "../lib/session";

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
  const { results: companies } = await makeApiRequest({
    url: `api/companies/`,
    method: "GET",
  });

  const session = getSession();

  const userEmail = session.email;

  return companies?.filter((company) => company.profile === userEmail) || [];
};

export const createCompany = async (data) => {
  await getOrCreateCompanyCategories(data.company_category);

  await getOrCreateCompanySize(data.company_size);

  if (!data.company_category === undefined || data.company_size === undefined)
    throw new Error("Please return organization type or company size");

  const company = await makeApiRequest({
    url: `api/companies/`,
    method: "POST",
    data: {
      company_name: data.company_name.toLowerCase(),
      organization_type: data.company_category,
      about: data.company_description,
      tag_line: data.company_tagline,
      company_size: data.company_size,
      email: data.company_email,
      office_address: data.office_address,
      country: data.country,
      state: data.city,
      city: data.city,
      website: data.company_website,
    },
  });

  return company;
};

export const getOrCreateCompanyCategories = async (name) => {
  const { results: categories } = await makeApiRequest({
    url: `api/company-categories/`,
    method: "GET",
  });

  console.log("Category", name);
  const hasCategory =
    categories?.filter((data) => data.name === name).length > 0;

  if (hasCategory) return categories || [];

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

  if (results.filter((data) => data.size === size).length > 0) return results;

  return await makeApiRequest({
    url: `api/company-sizes/`,
    method: "POST",
    data: { size },
  });
};
