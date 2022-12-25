import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import { LocationContext } from './LocationContext';

export const LocationProvider = (props: any) => {
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const [currentAddress, setCurrentAddress] = useState<string>('');

  const getAddressFromGeolocation = (lat: number, long: number) => {
    Geocode.setApiKey(import.meta.env.VITE_GEOLOCATION_API_KEY);
    Geocode.setLocationType('ROOFTOP');
    Geocode.fromLatLng(lat.toString(), long.toString()).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let city, state, country;
        for (let i = 0; i < response.results[0].address_components.length; i++) {
          for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
              case 'locality':
                city = response.results[0].address_components[i].long_name;
                break;
              case 'administrative_area_level_1':
                state = response.results[0].address_components[i].long_name;
                break;
              case 'country':
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        console.log(city, state, country);
        console.log(address);
      },
      (error) => {
        console.error(error);
      },
    );
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      getAddressFromGeolocation(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <LocationContext.Provider
      value={{ longitude, setLongitude, latitude, setLatitude, currentAddress, setCurrentAddress }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
