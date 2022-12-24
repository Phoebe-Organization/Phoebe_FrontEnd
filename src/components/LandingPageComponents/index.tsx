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
import Person from '../../assets/people/profileImage.jpg';
import { Interest } from './components/Interests.component';

interface LandingPageProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const LandingPage = () => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthToken();

  const cards = [
    <EventCard
      img={Img.Store1}
      icon={<FaGolfBall />}
      tagName={'Parks'}
      key='card1'
      hostImage={Person}
      hostName='Natalié'
    />,
    <EventCard img={Img.Store2} key='card2' hostImage={Person} hostName='Natalié' />,
    <EventCard img={Img.Store3} key='card3' hostImage={Person} hostName='Natalié' />,
    <EventCard img={Img.Store4} key='card4' hostImage={Person} hostName='Natalié' />,
    <EventCard img={Img.Store5} key='card5' hostImage={Person} hostName='Natalié' />,
    <EventCard img={Img.Store5} key='card6' hostImage={Person} hostName='Natalié' />,
    <EventCard img={Img.Store5} key='card7' hostImage={Person} hostName='Natalié' />,
  ];

  return (
    <>
      <Hero />
      <Interest />
      <Search />
      <Rail cards={cards}>New Events</Rail>
      <DownloadApp />
      <Footer />
    </>
  );
};

export default LandingPage;
