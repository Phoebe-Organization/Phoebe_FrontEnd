import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
import { DownloadApp } from './components/DownloadApp.component';
import { Footer } from './components/Footer.component';
import { Hero } from './components/Hero.components';
import { Search } from './components/Search.components';

interface LandingPageProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const LandingPage = () => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthToken();

  useEffect(() => {
    if (isAuthenticated != null) {
      navigation('/home');
    }
  }, []);

  return (
    <>
      <Hero />
      <DownloadApp />
      <Search />
      <Footer />
    </>
  );
};

export default LandingPage;
