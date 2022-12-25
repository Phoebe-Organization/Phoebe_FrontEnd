import React, { useEffect } from 'react';

interface OnboardingProgressionProps {
  step: number;
  totalSteps: number;
}

export const OnboardingProgression = ({ step, totalSteps }: OnboardingProgressionProps) => {
  useEffect(() => {
    //Do Step Animation
  }, [step]);

  return (
    <div
      style={{ width: `${(step / totalSteps) * 200}px`, height: '6px', backgroundColor: 'blue' }}
    ></div>
  );
};
