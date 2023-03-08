import { useEffect } from 'react';
import { ProgressionBar, ProgressionBarContainer } from '../../styles/onboarding';

interface OnboardingProgressionProps {
  step: number;
  totalSteps: number;
}

export const OnboardingProgression = ({ step, totalSteps }: OnboardingProgressionProps) => {
  useEffect(() => {
    //Do Step Animation
  }, [step]);

  return (
    <>
      <ProgressionBarContainer>
        <ProgressionBar style={{ width: `${(step / totalSteps) * 200}px` }}></ProgressionBar>
      </ProgressionBarContainer>
    </>
  );
};
