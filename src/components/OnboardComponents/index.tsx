import React, { useContext, useState } from 'react';
import { OnboardingContext } from '../../contexts/Onboarding/OnboardingContext';
import { useScrollLock } from '../../globals/scrollLock';
import Button from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import {
  OnboardingBackground,
  OnboardingContainer,
  OnboardingProgressionButtonContainer,
  OnboardingStepsContainer,
} from '../styles/onboarding';
import { OnboardingGeolocation } from './components/Geolocation.component';
import Interests from './components/Interests.component';
import { OnboardingProgression } from './components/Progression.component';

const Onboarding = () => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { toggleOnboardModal, showModal } = useContext(OnboardingContext);

  const [progress, setProgress] = useState<number>(1);
  if (showModal) {
    lockScroll();
  } else {
    unlockScroll();
  }

  const [address, setAddress] = useState<string>('');
  const [interestList, setInterestList] = useState<string[]>([]);

  const steps = [
    <OnboardingGeolocation setData={setAddress} />,
    <Interests data={interestList} setData={setInterestList} />,
  ];
  console.log(address);
  console.log(interestList);

  return showModal ? (
    <OnboardingBackground>
      <OnboardingContainer>
        <OnboardingProgression step={progress} totalSteps={steps.length} />
        <button onClick={() => toggleOnboardModal()}>UNlock Scroll</button>
        <OnboardingStepsContainer>{steps[progress]}</OnboardingStepsContainer>
        <OnboardingProgressionButtonContainer>
          <Button
            btnSize={ButtonSizes.SMALL}
            btnStyle={ButtonStyles.SECONDARY}
            action={() => setProgress((val) => --val)}
          >
            Previous
          </Button>
          <Button
            btnSize={ButtonSizes.SMALL}
            btnStyle={ButtonStyles.SECONDARY}
            action={() => setProgress((val) => ++val)}
          >
            Next
          </Button>
        </OnboardingProgressionButtonContainer>
      </OnboardingContainer>
    </OnboardingBackground>
  ) : null;
};

export default Onboarding;
