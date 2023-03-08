import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navbar/Navbar.component';

export const LandingPageLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
