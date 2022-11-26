export const getAuthToken: () => string = () => {
  const token = localStorage.getItem('token');
  if (token != null) {
    return localStorage.token;
  } else {
    return null;
  }
};
