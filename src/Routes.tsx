import React, { Dispatch, SetStateAction, useContext, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/Auth/AuthContext';
import { ProtectedRoute, ProtectedRouteProps } from './Routing/ProtectedRoute';
import { Paths } from './globals/paths';
import { Home } from './components/HomeComponent';
import { DashboardLayout } from './Layouts/Dashboard.Layout';
import { LandingPageLayout } from './Layouts/LandingPage.Layout';

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
    HOME: <Home />,
    LANDINGPAGE: <LandingPage />,
    SIGNIN: <Signin />,
    SIGNUP: <Signup />,
    DASHBOARD: <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />,
    ABOUT: <About />,
  };

  const AllLayouts = {
    DASHBOARD_LAYOUT: <DashboardLayout />,
    LANDINGPAGE_LAYOUT: <LandingPageLayout />,
  };
  return (
    <Suspense>
      <Routes>
        <Route element={AllLayouts.DASHBOARD_LAYOUT}>
          {isAuthenticated ? <Route path={Paths.BASEPATH} element={AllRoutes.HOME} /> : null}
          <Route path={Paths.DASHBOARD} element={AllRoutes.DASHBOARD} />
        </Route>
        <Route element={AllLayouts.LANDINGPAGE_LAYOUT}>
          <Route path={Paths.BASEPATH} element={AllRoutes.LANDINGPAGE} />
          <Route path={Paths.ABOUT} element={AllRoutes.ABOUT} />
        </Route>
        <Route path={Paths.SIGNIN} element={AllRoutes.SIGNIN} />
        <Route path={Paths.SIGNUP} element={AllRoutes.SIGNUP} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
