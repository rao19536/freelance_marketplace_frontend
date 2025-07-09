import { lazy } from "react";
import { ROUTES } from "./routePaths";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const publicRoutes = [
  {
    path: ROUTES.login,
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: ROUTES.register,
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
];

export const privateRoutes = [
  {
    path: ROUTES.home,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
];
