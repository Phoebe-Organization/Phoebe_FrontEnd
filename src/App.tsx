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
import AuthRouting from './components/Routing/PreventReauthentication';
import { Paths } from './globals/paths';
import Sidebar from './components/Navbar/Sidebar.component';

const queryClient = new QueryClient();

const App = () => {
  // SetToken
  const token = getAuthToken();
  setAxiosAuthToken(token);

  const [showNav, setShowNav] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* {showNav ? <Navigation /> : null} */}
        <div className='container'>
          <div className='sideBar'>
            <Sidebar />
          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/' element={<AuthRouting />}>
                <Route path={Paths.SIGNIN} element={<Signin showNav={setShowNav} />} />
                <Route path={Paths.SIGNUP} element={<Signup showNav={setShowNav} />} />
              </Route>
              <Route path={Paths.HOME} element={<PrivateRoute />}>
                <Route path={Paths.HOME} element={<Dashboard />} />
              </Route>
              <Route path={Paths.ABOUT} element={<AboutSection />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
