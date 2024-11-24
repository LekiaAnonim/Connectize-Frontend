import { toast } from "sonner";
import { makeApiRequest } from "../lib/helpers";
import { capitalizeFirst } from "../lib/utils";

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

  return results || [];
};

export const createProduct = async (data, resetForm) => {
  const productCategoryData = data.product_category.trim().toLowerCase();

  if (!data || !productCategoryData) {
    toast.error("No product data or product category found");
    return;
  }

  await getOrCreateProductCategories(productCategoryData);

  const product = await makeApiRequest({
    url: `api/products/`,
    method: "POST",
    data: {
      title: capitalizeFirst(data.product_title),
      sub_title: data.subtitle,
      category: productCategoryData,
      description: data.description,
      featured: false,
      company: "Blue Oil",
    },
    resetForm,
  });

  const image1 = await getOrCreateProductImages(
    {
      image: data.image_1,
      caption: data?.image_caption1 || data?.product_title,
      product: product.id,
    },
    product
  );

  const image2 = await getOrCreateProductImages(
    {
      image: data.image_2,
      caption: data?.image_caption2 || data?.product_title,
      product: product.id,
    },
    product
  );
  const image3 = await getOrCreateProductImages(
    {
      image: data.image_3,
      caption: data?.image_caption3 || data?.product_title,
      product: product.id,
    },
    product
  );
  const image4 = await getOrCreateProductImages(
    {
      image: data.image_4,
      caption: data?.image_caption4 || data?.product_title,
      product: product.id,
    },
    product
  );

  console.log("Created Product: ", product, image1, image2, image3, image4);

  if (product && image1 && image2 && image3 && image4)
    toast.success(`${product.title} has been created successfully!`);
};

export const getOrCreateProductImages = async (data, type) => {
  const { results: products } = await makeApiRequest({
    url: `api/product-images/`,
    method: "GET",
  });

  if (type === "get" || data === undefined) return products || [];

  return await makeApiRequest({
    url: `api/product-images/`,
    method: "POST",
    data,
    contentType: "multipart/form-data",
  });
};

export const getOrCreateProductCategories = async (name) => {
  const { results } = await makeApiRequest({
    url: `api/product-categories/`,
    method: "GET",
  });

  const hasCategory = results?.filter((data) => data.name === name).length > 0;

  console.log("results: ", hasCategory);

  if (hasCategory || name === undefined) return results;

  const newCategory = await makeApiRequest({
    url: `api/product-categories/`,
    method: "POST",
    data: { name: name },
  });

  return newCategory;
};
