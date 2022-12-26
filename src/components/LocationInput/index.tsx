import { useContext, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { LocationContext } from '../../contexts/Location/LocationContext';
import InputField from '../InputFieldComponents/InputField.component';
import {
  GeolocationOption,
  GeolocationOptionContainer,
  GeolocationInputContainer,
} from '../styles/onboarding';
import usePlacesAutocomplete from 'use-places-autocomplete';

interface LocationInputProps {
  setData: (s: string) => void;
}

export const LocationInput = ({ setData }: LocationInputProps) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const { currentAddress, getCurrentLocation } = useContext(LocationContext);

  const [address, setAddress] = useState('');
  const [selected, setSelected] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCityChange = async (e: React.FormEvent<HTMLInputElement>) => {
    setData(e.currentTarget.value);
    setAddress(e.currentTarget.value);
    setSelected(false);
    if (!address) return;

    setValue(e.currentTarget.value);
  };

  const handleSelectAddress = (text: string) => {
    setAddress(text);
    setData(text);
    setSelected(true);
    setValue('');
    if (text === '') {
      setErrorMessage('Make sure you have location turned on');
      getCurrentLocation();
    }
  };

  const renderOptions = () => {
    return data.map(({ place_id, description }: any) => {
      return (
        <GeolocationOption key={place_id} onClick={() => handleSelectAddress(description)}>
          <p>
            <HiLocationMarker style={{ margin: '0px 4px', fontSize: '20px' }} />
            {description}
          </p>
        </GeolocationOption>
      );
    });
  };

  const borderBottom: React.CSSProperties | undefined =
    status == 'OK' && !selected
      ? { borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }
      : undefined;

  const currentAddressSelected = address === currentAddress;

  const geoLocationOptions = (
    <GeolocationOptionContainer>
      <GeolocationOption key={0} onClick={() => handleSelectAddress(currentAddress)}>
        <p>
          <FaLocationArrow style={{ margin: '0px 7px', fontSize: '14px' }} />
          Current Address
        </p>
      </GeolocationOption>
      {renderOptions()}
    </GeolocationOptionContainer>
  );

  return (
    <GeolocationInputContainer>
      <InputField
        title={'Location'}
        showLabel={false}
        type={'text'}
        inputChange={handleCityChange}
        inputName={'Location'}
        val={address}
        icon={
          currentAddressSelected ? (
            <FaLocationArrow style={{ fontSize: '16px' }} />
          ) : (
            <HiLocationMarker style={{ fontSize: '20px' }} />
          )
        }
        inputWidth={350}
        inputStyle={borderBottom}
        dropDown={status == 'OK' && !selected ? geoLocationOptions : undefined}
      >
        Enter your location
      </InputField>
    </GeolocationInputContainer>
  );
};
