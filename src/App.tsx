import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navbar/Navbar.component';
import AppRoutes from './Routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
