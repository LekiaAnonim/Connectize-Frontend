import { makeApiRequest } from "../lib/helpers";

export const getAllProducts = async () => {
  const { results } = await makeApiRequest({
    url: `api/products/`,
    method: "GET",
  });

  return results;
};

export const getProductImages = async () => {
  const { results } = await makeApiRequest({
    url: `api/product-images/`,
    method: "GET",
  });

  return results;
};

export const getProductCategories = async () => {
  const { results } = await makeApiRequest({
    url: `api/product-categories/`,
    method: "GET",
  });

  return results;
};
