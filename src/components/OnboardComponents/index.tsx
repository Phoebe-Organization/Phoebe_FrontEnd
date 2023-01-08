import { useContext, useState } from 'react';
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
import { OnboardingDescription } from './components/Description.component';
import { OnboardingFollowUsers } from './components/FollowUsers.component';
import { OnboardingGeolocation } from './components/Geolocation.component';
import { OnboardingGroups } from './components/Groups.component';
import Interests from './components/Interests.component';
import { OnboardingProgression } from './components/Progression.component';

const Onboarding = () => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { toggleOnboardModal, showModal } = useContext(OnboardingContext);

  const [progress, setProgress] = useState<number>(0);
  if (showModal) {
    lockScroll();
  } else {
    unlockScroll();
  }

  const handleModalCompletion = () => {
    setProgress(0);
    toggleOnboardModal();
  };

  const [address, setAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [interestList, setInterestList] = useState<string[]>([]);

  const steps = [
    <OnboardingGeolocation setData={setAddress} />,
    <OnboardingDescription value={description} setData={setDescription} />,
    <Interests data={interestList} setData={setInterestList} />,
    <OnboardingGroups />,
    <OnboardingFollowUsers />,
  ];

  return showModal ? (
    <OnboardingBackground>
      <OnboardingContainer>
        <OnboardingProgression step={progress} totalSteps={steps.length - 1} />
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
            action={
              progress >= steps.length - 1
                ? () => handleModalCompletion()
                : () => setProgress((val) => ++val)
            }
          >
            {progress >= steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </OnboardingProgressionButtonContainer>
      </OnboardingContainer>
    </OnboardingBackground>
  ) : null;
};

export default Onboarding;
