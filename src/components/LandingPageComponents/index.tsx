import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
import { Rail } from '../RailsComponents';
import { UserCard } from '../RailsComponents/components/UserCard.component';
import { DownloadApp } from './components/DownloadApp.component';
import { Footer } from './components/Footer.component';
import { Hero } from './components/Hero.component';
import { Search } from './components/Search.component';

interface LandingPageProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const LandingPage = () => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthToken();

  const cards = [<UserCard />, <UserCard />, <UserCard />, <UserCard />, <UserCard />];

  useEffect(() => {
    if (isAuthenticated != null) {
      navigation('/home');
    }
  }, []);

  return (
    <>
      <Hero />
      <Rail cards={cards}>Popular Users</Rail>
      <DownloadApp />
      <Search />
      <Footer />
    </>
  );
};

export default LandingPage;
