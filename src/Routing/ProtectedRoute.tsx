import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean | undefined;
  authenticationPath: string | undefined;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
