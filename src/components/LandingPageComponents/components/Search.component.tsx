import React from 'react';
import { useGenericInputText } from '../../../hooks/TextHooks';
import InputField from '../../InputFieldComponents/InputField.component';
import { BsSearch } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';

export const Search = () => {
  const keywordSearch = useGenericInputText();
  const locationSearch = useGenericInputText();

  return (
    <>
      <h1>Search</h1>
      <InputField
        title={'Keyword Search'}
        showLabel={false}
        type={'text'}
        inputChange={keywordSearch.inputChange}
        inputName={'Search'}
        val={keywordSearch.textVal}
        icon={<BsSearch />}
        inputWidth={450}
      >
        Search By Keywords
      </InputField>
      <InputField
        title={'Location Search'}
        showLabel={false}
        type={'text'}
        inputChange={locationSearch.inputChange}
        inputName={'Search'}
        val={locationSearch.textVal}
        icon={<FaLocationArrow />}
        inputWidth={450}
      >
        Search By Location
      </InputField>
    </>
  );
};
