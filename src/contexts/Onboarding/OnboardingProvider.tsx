import { useEffect, useState } from 'react';
import { OnboardingContext } from './OnboardingContext';

export const OnboardingProvider = (props: any) => {
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleOnboardModal = () => setShowModal(!showModal);
  useEffect(() => {}, []);
  return (
    <OnboardingContext.Provider
      value={{ toggleOnboardModal, showModal, isOnboarded, setIsOnboarded }}
    ></OnboardingContext.Provider>
  );
};
