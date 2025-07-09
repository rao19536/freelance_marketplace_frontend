import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routeConfig";
import { ErrorBoundary, NotFoundPage, SuspenseLoader } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <SuspenseLoader>
          <Routes>
            {/* Public Routes */}
            {publicRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            {/* Private Routes */}
            {privateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            {/* Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SuspenseLoader>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
