import { lazy, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navbar/Navbar.component';
import AppRoutes from './Routes';
import Onboarding from './components/OnboardComponents';
import SideNav from './components/Navbar/Sidebar.component';

const queryClient = new QueryClient();

const App = () => {
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
    <QueryClientProvider client={queryClient}>
      <Router>
        <Onboarding />
        <SideNav items={navItems} />
        <Navigation />
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
