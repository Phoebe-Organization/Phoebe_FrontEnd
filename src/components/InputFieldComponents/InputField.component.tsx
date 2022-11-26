import React from 'react';
import './InputFieldStyling.scss';

interface InputFieldProps {
  val: string | number | readonly string[];
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  children: string;
  title: string;
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({ title, val, type, inputName, children, inputChange }: InputFieldProps) => {
  //   const { type, inputName, children, inputChange } = props;
  return (
    <div className='input-container'>
      <label htmlFor={inputName} className='label-name'>
        {title}
      </label>
      <input
        className='input-field'
        value={val}
        type={type}
        name={inputName}
        autoComplete='off'
        onChange={inputChange}
        placeholder={children}
        required
      />
    </div>
  );
};

export default InputField;
