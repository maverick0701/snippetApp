const API_ROOT = "http://localhost:8000/api/v1";

export const ApiUrls = {
  login: () => `${API_ROOT}/users/create-session`,
  fetchPosts: () => `${API_ROOT}/posts`,
};
