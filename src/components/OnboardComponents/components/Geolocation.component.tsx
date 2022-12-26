import { LocationInput } from '../../LocationInput';

interface OnboardingGeolocationProps {
  setData: (s: string) => void;
}

export const OnboardingGeolocation = ({ setData }: OnboardingGeolocationProps) => {
  return (
    <div>
      <h1>GeoLocation!!</h1>
      <LocationInput setData={setData} />
    </div>
  );
};
