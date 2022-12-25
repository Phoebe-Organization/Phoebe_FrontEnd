import { createContext } from 'react';

export type LocationContext = {
  longitude: number;
  latitude: number;
  currentAddress: string;
  currentState: string;
  currentCity: string;
  currentCountry: string;
  setLongitude: (long: number) => void;
  setLatitude: (lat: number) => void;
  setCurrentAddress: (address: string) => void;
  setCurrentState: (state: string) => void;
  setCurrentCity: (city: string) => void;
  setCurrentCountry: (country: string) => void;
};

export const LocationContext = createContext<LocationContext>({
  longitude: 0,
  latitude: 0,
  currentAddress: '',
  currentState: '',
  currentCity: '',
  currentCountry: '',
  setLongitude: () => {},
  setLatitude: () => {},
  setCurrentAddress: () => {},
  setCurrentState: () => {},
  setCurrentCity: () => {},
  setCurrentCountry: () => {},
});
