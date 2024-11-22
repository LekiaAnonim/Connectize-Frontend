import { makeApiRequest } from "../lib/helpers";

// {
//     "title": "",
//     "sub_title": "",
//     "category": null,
//     "description": "",
//     "date_created": null,
//     "featured": false,
//     "company": null
// }

export const getProducts = async () => {
  const { results } = await makeApiRequest({
    url: `api/products/`,
    method: "GET",
  });

  return results;
};

export const createProduct = async (data) => {
  await getOrCreateProductCategories(data.category);
  const { results } = await makeApiRequest({
    url: `api/products/`,
    method: "POST",
    data,
  });

  return results;
};

export const getOrCreateProductImages = async (data, product) => {
  const { results } = await makeApiRequest({
    url: `api/product-images/`,
    method: "GET",
  });

  if (results.filter((data) => data.product.id === product.id)) return results;

  return await makeApiRequest({
    url: `api/product-images/`,
    method: "POST",
    data,
  });
};

export const getOrCreateProductCategories = async (name) => {
  const { results } = await makeApiRequest({
    url: `api/product-categories/`,
    method: "GET",
  });

  console.log("Product Category result: ", results);

  if (results.filter((data) => data.name === name)) return results;

  return await makeApiRequest({
    url: `api/product-categories/`,
    method: "POST",
    data: { name: name },
  });
};
