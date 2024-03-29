import axios from 'axios';

const setAxiosAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAxiosAuthToken;