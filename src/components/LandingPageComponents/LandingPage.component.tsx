import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
// import iPhone14 from '../../assets/iphone14.svg';
import iPhone from '../../assets/iPhoneImage.png';
import IPhoneBackgroundImg from '../../assets/pexels-rodnae-productions-8217860.jpg';
import {
  AppStoreButtonContainer,
  FloatingShadow,
  IPhoneBackgroundImage,
  IPhoneImage,
  IPhoneImageContainer,
} from '../styles/landingpage';
import FloatingImg from '../../assets/floatingShadow.png';
import { FaApple } from 'react-icons/fa';
// import iPhoneImage
// import { iPhoneImage} from '../styles/landingpage'

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
      <div>Welcome from Landing Pagfdsafdsae!</div>
      <IPhoneImageContainer>
        <IPhoneBackgroundImage>
          <IPhoneImage src={iPhone} />
        </IPhoneBackgroundImage>
        <FloatingShadow src={FloatingImg} />
      </IPhoneImageContainer>
      <AppStoreButtonContainer>
        <FaApple />
        <p>
          Download on the <br />
          <span className='bigTxt'>App Store</span>
        </p>
      </AppStoreButtonContainer>
    </>
  );
};

export default LandingPage;
