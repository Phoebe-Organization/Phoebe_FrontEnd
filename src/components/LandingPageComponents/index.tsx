import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
import { Rail } from '../RailsComponents';
import { EventCard } from '../RailsComponents/components/EventCard';
import { DownloadApp } from './components/DownloadApp.component';
import { Footer } from './components/Footer.component';
import { Hero } from './components/Hero.component';
import { Search } from './components/Search.component';
import * as Img from '../../assets/places';
import { FaGolfBall } from 'react-icons/fa';

interface LandingPageProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const LandingPage = () => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthToken();

  const cards = [
    <EventCard img={Img.Store1} icon={<FaGolfBall />} tagName={'Parks'} />,
    <EventCard img={Img.Store2} />,
    <EventCard img={Img.Store3} />,
    <EventCard img={Img.Store4} />,
    <EventCard img={Img.Store5} />,
  ];

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
