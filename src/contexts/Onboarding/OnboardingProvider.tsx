import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { OnboardingContext } from './OnboardingContext';

export const OnboardingProvider = (props: any) => {
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isAuthenticated } = useContext(AuthContext);

  const toggleOnboardModal = () => setShowModal(!showModal);

  useEffect(() => {
    if (isAuthenticated) {
      // Check if user is onboarded;
      setIsOnboarded(false);
    }
  }, [isAuthenticated]);

  return (
    <OnboardingContext.Provider
      value={{ toggleOnboardModal, showModal, isOnboarded, setIsOnboarded }}
    >
      {props.children}
    </OnboardingContext.Provider>
  );
};
