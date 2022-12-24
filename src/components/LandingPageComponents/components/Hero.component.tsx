import React from 'react';
import Button from '../../ButtonComponents/Button.component';
import { ButtonSizes } from '../../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../../ButtonComponents/ButtonStyles';
import { HeroContainer, HeroContent, HeroImage } from '../../styles/landingpage';
import HeroImg from '../../../assets/relaxation.svg';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../globals/paths';

const Header = () => {
  return (
    <h1 className='font-roboto boldTxt'>
      Finding great fellowship <br /> has never been easier
      <br /> than before with Phoebe!
    </h1>
  );
};

const SubHeader = () => {
  return (
    <p className='font-robot-condensed'>
      When looking for a community of like-minded <br />
      individuals, Phoebe makes it easier to bridge the gap <br /> between Social Media and In Real
      Life. <br />
      So be sure to not miss out on all the fun!
    </p>
  );
};

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Header />
          <SubHeader />
          <Button
            btnStyle={ButtonStyles.SECONDARY}
            btnSize={ButtonSizes.LARGE}
            action={() => navigate(Paths.SIGNUP)}
          >
            Get Started!
          </Button>
        </HeroContent>
        <HeroImage>
          <img src={HeroImg} alt='' />
        </HeroImage>
      </HeroContainer>
    </>
  );
};
