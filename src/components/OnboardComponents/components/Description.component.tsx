import React from 'react';
import { DescriptionContainer, OnboardingDescriptionInput } from '../../styles/onboarding';

interface OnboardingDescriptionProps {
  value: string;
  setData: (s: string) => void;
}

export const OnboardingDescription = ({ value, setData }: OnboardingDescriptionProps) => {
  const characterCount = value.length;
  return (
    <DescriptionContainer>
      <h1>Description</h1>
      <p>Describe yourself, Tell the world how amazing you are!</p>
      <em>
        If you can't think of the best way to describe yourself just think of what makes you unique
      </em>
      <OnboardingDescriptionInput
        value={value}
        onChange={(val) => setData(val.currentTarget.value)}
        maxLength={250}
      />
      <div className='character-count'>
        <span className={characterCount === 250 ? 'max-length' : ''}>{characterCount}</span> / 250
      </div>
    </DescriptionContainer>
  );
};
