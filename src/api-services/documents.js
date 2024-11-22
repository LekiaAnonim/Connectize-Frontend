import { makeApiRequest } from "../lib/helpers";

export const getDocuments = async () => {
  const { results } = await makeApiRequest({
    url: `api/documents/`,
    method: "GET",
  });

  return results;
};

export const getDocumentTypes = async () => {
  const { results } = await makeApiRequest({
    url: `api/document-types/`,
    method: "GET",
  });

  return results;
};
