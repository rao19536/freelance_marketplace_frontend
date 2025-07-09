import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../utils/api/getBaseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseURL(),
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export default baseQuery;
