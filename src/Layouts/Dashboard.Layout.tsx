import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/Navbar/SideNav.component';
import { VerticalDivider } from '../components/styles/global';
import {
  DashboardComponent,
  DashboardLayoutContainer,
  DashboardSideNav,
} from './styles/dashboard.style';

export const DashboardLayout = () => {
  const navItems = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <DashboardLayoutContainer>
      <DashboardSideNav>
        <SideNav items={navItems} />
      </DashboardSideNav>
      <VerticalDivider style={{ margin: '0', height: '100vh' }} />
      <DashboardComponent>
        <Outlet />
      </DashboardComponent>
    </DashboardLayoutContainer>
  );
};
