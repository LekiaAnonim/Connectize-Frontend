import { toast } from "sonner";
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

export const createCompany = async (data, resetForm) => {
  await getOrCreateCompanyCategories(data.company_category);

  await getOrCreateCompanySize(data.company_size);

  if (!data.company_category === undefined || data.company_size === undefined) {
    toast.error("Incomplete data was provided");
    return;
  }

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

  const document = await createCompanyDocument({
    type: data.document_type,
    document: data.company_document,
    company: company?.company_name,
  });

  if (!document || !company) {
    return;
  }
  resetForm?.();
  toast.success(company?.company_name + " was created successfully");

  return company;
};

export const getOrCreateCompanyCategories = async (name) => {
  const { results: categories } = await makeApiRequest({
    url: `api/company-categories/`,
    method: "GET",
  });

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

/**
 * {
 *  "type": null,
 *  "document": null,
 *   "company": null
 * }
 */

export const createCompanyDocument = async (data) => {
  await getOrCreateCompanyDocumentTypes(data.type, data.type);
  const companyDocument = await makeApiRequest({
    url: `api/documents/`,
    method: "POST",
    data,
    contentType: "multipart/form-data",
  });

  return companyDocument;
};

export const getOrCreateCompanyDocumentTypes = async (type, name) => {
  const { results: documentType } = await makeApiRequest({
    url: `api/document-types/`,
    method: "GET",
  });

  if (
    documentType.find(
      (document) => document.type === type || document.name === name
    )
  )
    return documentType;

  return await makeApiRequest({
    url: `api/document-types/`,
    method: "POST",
    data: { name, type },
  });
};
