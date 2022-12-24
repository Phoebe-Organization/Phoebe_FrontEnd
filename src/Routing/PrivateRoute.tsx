import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { Paths } from '../globals/paths';
import { getAuthToken } from '../utils/getAuthToken';

interface PrivateRouteProps {
  component: JSX.Element;
  path: string;
}

export const PrivateRoute = (props: RouteProps) => {
  const isAuthenticated = getAuthToken();

  return isAuthenticated ? (
    <Route path={props.path} element={props.element} />
  ) : (
    <Navigate to={Paths.SIGNIN} />
  );
};
