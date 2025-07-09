import { Navigate } from "react-router-dom";
import { ROUTES } from "./routePaths";

// Dummy auth check — replace with actual auth logic
const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.login} replace />;
  }

  return children;
};

export default ProtectedRoute;
