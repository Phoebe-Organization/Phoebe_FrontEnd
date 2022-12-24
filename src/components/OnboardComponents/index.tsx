import React, { useContext } from 'react';
import { OnboardingContext } from '../../contexts/Onboarding/OnboardingContext';
import { useScrollLock } from '../../globals/scrollLock';
import { OnboardingBackground, OnboardingContainer } from '../styles/onboarding';

const Onboarding = () => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { toggleOnboardModal, showModal } = useContext(OnboardingContext);

  if (showModal) {
    lockScroll();
  } else {
    unlockScroll();
  }

  return showModal ? (
    <OnboardingBackground>
      <OnboardingContainer>
        <h1>OnBoarding Page</h1>
        <button onClick={() => toggleOnboardModal()}>UNlock Scroll</button>
      </OnboardingContainer>
    </OnboardingBackground>
  ) : null;
};

export default Onboarding;
