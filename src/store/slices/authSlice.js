import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../api/baseQuery";
import { ENDPOINTS } from "../../utils/api/endpoints";

const { login, register } = ENDPOINTS;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: login,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: register,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
