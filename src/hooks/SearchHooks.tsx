import React, { useState } from 'react';

const useKeywordSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return {
    searchVal: searchValue,
    inputChange: handleSearchInputChange,
  };
};

export { useKeywordSearch };
