import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

const SuspenseLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <CircularProgress size={50} thickness={4} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export { SuspenseLoader };
