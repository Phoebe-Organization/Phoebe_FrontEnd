import React from 'react';
import { InputContainer } from '../styles/input';
// import './InputFieldStyling.scss';

interface InputFieldProps {
  val: string | number | readonly string[];
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  children: string;
  title: string;
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({ title, val, type, inputName, children, inputChange }: InputFieldProps) => {
  return (
    <InputContainer>
      <label htmlFor={inputName}>{title}</label>
      <input
        value={val}
        type={type}
        name={inputName}
        autoComplete='off'
        onChange={inputChange}
        placeholder={children}
        required
      />
    </InputContainer>
  );
};

export default InputField;
