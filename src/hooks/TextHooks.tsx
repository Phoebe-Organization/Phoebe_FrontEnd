import React, { useState } from 'react';

const useGenericInputText = () => {
  const [textValue, setTextValue] = useState('');

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
  };

  return {
    textVal: textValue,
    inputChange: handleInputChange,
  };
};

export { useGenericInputText };
