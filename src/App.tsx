import { lazy, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navbar/Navbar.component';
import AppRoutes from './Routes';
import Onboarding from './components/OnboardComponents';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Onboarding trigger={true} />
        <Navigation />
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
