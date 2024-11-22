import { makeApiRequest } from "../lib/helpers";

export const getDocuments = async () => {
  const { results } = await makeApiRequest({
    url: `api/services/`,
    method: "GET",
  });

  return results;
};
