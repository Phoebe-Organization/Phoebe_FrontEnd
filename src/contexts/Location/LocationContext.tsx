import { createContext } from 'react';

export type LocationContext = {
  longitude: number;
  latitude: number;
  currentAddress: string;
  setLongitude: (long: number) => void;
  setLatitude: (lat: number) => void;
  setCurrentAddress: (address: string) => void;
};

export const LocationContext = createContext<LocationContext>({
  longitude: 0,
  latitude: 0,
  currentAddress: '',
  setLongitude: () => {},
  setLatitude: () => {},
  setCurrentAddress: () => {},
});
