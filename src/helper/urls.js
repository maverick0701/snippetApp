const API_ROOT = "http://localhost:8000/api/v1";

export const ApiUrls = {
  login: () => `${API_ROOT}/users/create-session`,
  register: () => `${API_ROOT}/users/signUP`,
  fetchPosts: () => `${API_ROOT}/posts`,
  editProfile: () => `${API_ROOT}/users/update`,
};
