
import { authApi } from "./slices/authSlice";

export const reducers = {
  [authApi.reducerPath]: authApi.reducer,
};

export const middlewares = [authApi.middleware];
