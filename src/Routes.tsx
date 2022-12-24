import React, { Dispatch, SetStateAction, useContext, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { ProtectedRoute, ProtectedRouteProps } from './Routing/ProtectedRoute';
import { Paths } from './globals/paths';

const AppRoutes = () => {
  const { isAuthenticated, redirectAuthPath } = useContext(AuthContext);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    authenticationPath: redirectAuthPath,
  };

  /*** Lazy Loads ***/
  const LandingPage = lazy(() => import('./components/LandingPageComponents'));
  const Signin = lazy(() => import('./components/AuthComponents/Sigin.component'));
  const Signup = lazy(() => import('./components/AuthComponents/Signup.component'));
  const Dashboard = lazy(() => import('./components/DashboardComponents/Dashboard.component'));
  const About = lazy(() => import('./components/AboutComponents/About.component'));

  const AllRoutes = {
    SIGNIN: <Signin />,
    SIGNUP: <Signup />,
    DASHBOARD: <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />,
    ABOUT: <ProtectedRoute {...defaultProtectedRouteProps} outlet={<About />} />,
  };
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path={Paths.SIGNIN} element={AllRoutes.SIGNIN} />
        <Route path={Paths.SIGNUP} element={AllRoutes.SIGNUP} />
        <Route path={Paths.HOME} element={AllRoutes.DASHBOARD} />
        <Route path={Paths.ABOUT} element={AllRoutes.ABOUT} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
