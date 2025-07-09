export const ENDPOINTS = {
  login: "/api/login",
  register: "/api/register",
  jobs: {
    getAll: "/api/jobs",
    postJob: "/api/jobs",
    getById: (id) => `/api/jobs/${id}`,
    apply: (id) => `/api/jobs/${id}/apply`,
  },
  notifications: "/api/notifications",
};
