import { Navigate } from "react-router-dom";
import { ROUTES } from "./routePaths";

// Dummy auth check – replace with real one
const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to={ROUTES.home} replace />;
  }

  return children;
};

export default PublicRoute;
