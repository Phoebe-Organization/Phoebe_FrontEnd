import React from 'react';
import { useScrollLock } from '../../globals/scrollLock';
import { OnboardingContainer } from '../styles/onboarding';

interface OnboardingProps {
  trigger: boolean;
}

const Onboarding = ({ trigger }: OnboardingProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  if (trigger) {
    lockScroll();
  } else {
    unlockScroll();
  }

  return trigger ? (
    <OnboardingContainer>
      <h1>OnBoarding Page</h1>
      <button>UNlock Scroll</button>
    </OnboardingContainer>
  ) : null;
};

export default Onboarding;
