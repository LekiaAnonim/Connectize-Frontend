import { makeApiRequest } from "../lib/helpers";

export const getSearchResults = async (searchTerm) => {
  const searchResults = await makeApiRequest({
    url: `api/search?q=${searchTerm}`,
    method: "GET",
  });

  return searchResults;
};
