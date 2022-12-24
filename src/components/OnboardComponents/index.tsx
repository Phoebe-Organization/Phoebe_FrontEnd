import React, { useContext } from 'react';
import { OnboardingContext } from '../../contexts/Onboarding/OnboardingContext';
import { useScrollLock } from '../../globals/scrollLock';
import { OnboardingContainer } from '../styles/onboarding';

const Onboarding = () => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { toggleOnboardModal, showModal } = useContext(OnboardingContext);

  if (showModal) {
    lockScroll();
  } else {
    unlockScroll();
  }

  return showModal ? (
    <OnboardingContainer>
      <h1>OnBoarding Page</h1>
      <button onClick={() => toggleOnboardModal()}>UNlock Scroll</button>
    </OnboardingContainer>
  ) : null;
};

export default Onboarding;
