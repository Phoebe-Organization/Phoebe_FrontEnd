import React, { Component } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
import Signin from '../AuthComponents/Sigin.component';

interface AuthRouteProps {
  element: React.ReactNode;
  path: string;
  isAuthenticated: boolean;
}

const AuthRouting = () => {
  const isAuthenticated = getAuthToken();
  return isAuthenticated != null ? <Navigate to='/home' /> : <Outlet />;
};

export default AuthRouting;
