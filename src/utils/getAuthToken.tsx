import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';

export const getAuthToken: () => string = () => {
  const token = localStorage.getItem('token');
  if (token != null) {
    return localStorage.token;
  } else {
    return null;
  }
};
