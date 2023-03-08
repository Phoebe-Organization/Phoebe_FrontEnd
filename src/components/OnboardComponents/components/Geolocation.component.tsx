import { LocationInput } from '../../LocationInput';
import { Special } from '../../styles/landingpage';

interface OnboardingGeolocationProps {
  setData: (s: string) => void;
}

export const OnboardingGeolocation = ({ setData }: OnboardingGeolocationProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h3>Enter your Location</h3>
      <p style={{ width: '350px' }}>
        We use your location to find <Special>Events</Special>, <Special>Communities</Special> and
        even <Special>People</Special> near you!
      </p>
      <LocationInput setData={setData} />
    </div>
  );
};
