import { toast } from "sonner";
import { makeApiRequest } from "../lib/helpers";
import { capitalizeFirst } from "../lib/utils";
import { getSession } from "../lib/session";
import { getCompanies } from "./companies";

// {
//     "title": "",
//     "sub_title": "",
//     "category": null,
//     "description": "",
//     "date_created": null,
//     "featured": false,
//     "company": null
// }

export const getServices = async () => {
  const { results: services } = await makeApiRequest({
    url: `api/services/`,
    method: "GET",
  });

  const companies = await getCompanies();

  const newServices = services.map((service) => {
    const company = companies.find(
      (company) => company.company_name === service.company
    );
    return {
      ...service,
      companyInfo: company,
    };
  });

  return newServices;
};

export const createService = async (data, resetForm) => {
  const serviceCategory = capitalizeFirst(
    data.service_category.trim().toLowerCase()
  );

  const { user } = getSession();

  console.log(data);

  const toastId = toast.info("Creating service...");

  if (!user && (!data || !serviceCategory)) {
    toast.error("No User session or service data or service category found", {
      id: toastId,
    });
    return;
  }

  await getOrCreateServiceCategories(serviceCategory);

  const service = await makeApiRequest({
    url: `api/services/`,
    method: "POST",
    data: {
      title: capitalizeFirst(data.service_title),
      sub_title: data.service_subtitle,
      category: serviceCategory,
      description: data.service_description,
      company: data?.company || "",
    },
    resetForm,
  });

  if (service)
    toast.success(`${service.title} has been created successfully!`, {
      id: toastId,
    });

  return service;
};

export const getServiceImages = async () => {
  const { results: images } = await makeApiRequest({
    url: `api/service-images/`,
    method: "GET",
  });

  return images || [];
};

// Service categories
export const getServiceCategories = async () => {
  const { results: categories } = await makeApiRequest({
    url: `api/service-categories/`,
    method: "GET",
  });

  return categories || [];
};

export const getOrCreateServiceCategories = async (name) => {
  const categories = await getServiceCategories();

  const hasCategory =
    categories?.filter((data) => data.name === name).length > 0;

  if (hasCategory) return categories || [];

  const newCategory = await makeApiRequest({
    url: `api/service-categories/`,
    method: "POST",
    data: { name: name },
  });

  return newCategory;
};
