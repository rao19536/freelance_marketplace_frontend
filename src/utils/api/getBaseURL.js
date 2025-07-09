const getBaseURL = () => {
  // 1. Prefer using environment variable (e.g. from .env files)
  const envBase = import.meta.env.VITE_API_BASE_URL;

  if (envBase && typeof envBase === "string") {
    return envBase;
  }

  // 2. Fallback to auto-detecting environment
  const hostname = window.location.hostname;
  
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:8000/api"; // Local Laravel backend
  }

  // 3. Default production URL
  return "https://rao.com/api";
};

export default getBaseURL;
