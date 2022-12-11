import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';
// import iPhone14 from '../../assets/iphone14.svg';
import iPhone from '../../assets/iPhoneImage.png';
import IPhoneBackgroundImg from '../../assets/pexels-rodnae-productions-8217860.jpg';
import {
  AppStoreButton,
  AppStoreButtonContainer,
  FloatingShadow,
  HeroContainer,
  IPhoneBackgroundImage,
  IPhoneImage,
  IPhoneImageContainer,
  Special,
} from '../styles/landingpage';
import FloatingImg from '../../assets/floatingShadow.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Phoebe from '../../assets/phoebe.svg';
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
      <HeroContainer>
        <IPhoneImageContainer>
          <IPhoneBackgroundImage>
            <IPhoneImage src={iPhone} />
          </IPhoneBackgroundImage>
          <FloatingShadow src={FloatingImg} />
        </IPhoneImageContainer>
        <div className='downloadApp'>
          <img src={Phoebe} className='phoebeLogo' />

          <p className='boldTxt'>
            Download the app
            <br />
            for a unique <Special>experience!</Special>
          </p>
          <AppStoreButtonContainer>
            <AppStoreButton>
              <FaApple />
              <p>
                Download on the <br />
                <span className='bigTxt'>App Store</span>
              </p>
            </AppStoreButton>

            <AppStoreButton>
              <FaGooglePlay />
              <p>
                Get it on <br />
                <span className='bigTxt'>Google Play</span>
              </p>
            </AppStoreButton>
          </AppStoreButtonContainer>
        </div>
      </HeroContainer>
    </>
  );
};

export default LandingPage;
