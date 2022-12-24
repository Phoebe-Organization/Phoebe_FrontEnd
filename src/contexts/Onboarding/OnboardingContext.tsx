import { createContext } from 'react';

export type OnboardingContext = {
  isOnboarded: boolean;
  showModal: boolean;
  setIsOnboarded: (isOnboarded: boolean) => void;
  toggleOnboardModal: (showModal: boolean) => void;
};

export const OnboardingContext = createContext<OnboardingContext>({
  isOnboarded: false,
  showModal: false,
  setIsOnboarded: () => {},
  toggleOnboardModal: () => {},
});
