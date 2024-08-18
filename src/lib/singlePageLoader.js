import apiRequest from "./apiRequest.js";

export const SinglePageLoader = async ({ request, params }) => {
  const res = await apiRequest.get("/post/" + params.id);
  return res.data.data;
};
