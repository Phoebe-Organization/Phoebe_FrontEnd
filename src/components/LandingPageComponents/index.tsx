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
    <EventCard img={Img.Store1} icon={<FaGolfBall />} tagName={'Parks'} key='card1' />,
    <EventCard img={Img.Store2} key='card2' />,
    <EventCard img={Img.Store3} key='card3' />,
    <EventCard img={Img.Store4} key='card4' />,
    <EventCard img={Img.Store5} key='card5' />,
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
