import Geocode from 'react-geocode';

export const getAddressFromGeolocation = (long: number, lat: number) => {
  Geocode.setApiKey(import.meta.env.VITE_GEOLOCATION_API_KEY);
  Geocode.setLocationType('ROOFTOP');

  Geocode.fromLatLng(long.toString(), lat.toString()).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    },
  );

  console.log(import.meta.env.VITE_GEOLOCATION_API_KEY);
};

export const getCurrentGeolocation = () => {
  let long: number = 0;
  let lat: number = 0;
  let accuracy: number = 0;

  return navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    accuracy = position.coords.accuracy;
    return {
      long,
      lat,
      accuracy,
    };
  });
};
