import { Dispatch, SetStateAction, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signin from './components/AuthComponents/Sigin.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getAuthToken } from './utils/getAuthToken';
import setAxiosAuthToken from './utils/setAxiosAuthToken';
import PrivateRoute from './components/Routing/PrivateRouting';
import Signup from './components/AuthComponents/Signup.component';
import Navigation from './components/Navbar/Navbar.component';
import AboutSection from './components/AboutComponents/About.component';
import Dashboard from './components/DashboardComponents/Dashboard.component';
import LandingPage from './components/LandingPageComponents/LandingPage.component';

const queryClient = new QueryClient();

const App = () => {
  // SetToken
  const token = getAuthToken();
  setAxiosAuthToken(token);

  const [showNav, setShowNav] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {showNav ? <Navigation /> : null}
        <Routes>
          <Route path='/signin' element={<Signin showNav={setShowNav} />} />
          <Route path='/signup' element={<Signup showNav={setShowNav} />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<PrivateRoute />}>
            <Route path='/home' element={<Dashboard />} />
          </Route>
          <Route path='/about' element={<AboutSection />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
