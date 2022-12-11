import React from 'react';
import Button from '../../ButtonComponents/Button.component';
import { ButtonSizes } from '../../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../../ButtonComponents/ButtonStyles';
import { HeroContainer, HeroContent } from '../../styles/landingpage';

const Header = () => {
  return (
    <h1 className='font-roboto boldTxt'>
      Finding great fellowship has never been <br /> easier than before with Phoebe!
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
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Header />
          <SubHeader />
          <Button btnStyle={ButtonStyles.SECONDARY} btnSize={ButtonSizes.LARGE}>
            Get Started!
          </Button>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
