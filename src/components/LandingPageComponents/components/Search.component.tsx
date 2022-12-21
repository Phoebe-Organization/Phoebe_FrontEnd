import React from 'react';
import { useKeywordSearch } from '../../../hooks/SearchHooks';
import InputField from '../../InputFieldComponents/InputField.component';
import { BsSearch } from 'react-icons/bs';

export const Search = () => {
  const { searchVal, inputChange } = useKeywordSearch();
  return (
    <>
      <h1>Search</h1>
      <InputField
        title={'Keyword Search'}
        showLabel={false}
        type={'text'}
        inputChange={inputChange}
        inputName={'Search'}
        val={searchVal}
        icon={<BsSearch />}
      >
        Search By Keywords
      </InputField>
    </>
  );
};
