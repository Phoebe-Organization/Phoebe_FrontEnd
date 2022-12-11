import React from 'react';
import { IconType } from 'react-icons';
import { FontFamily } from '../../globals/fonts';
import { InputContainer } from '../styles/input';

interface InputFieldProps {
  val: string | number | readonly string[];
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  children: string;
  title: string;
  showLabel?: boolean;
  labelFont?: FontFamily;
  icon?: JSX.Element;
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({
  title,
  val,
  type,
  inputName,
  children,
  showLabel = true,
  labelFont = FontFamily.TIMES,
  icon,
  inputChange,
}: InputFieldProps) => {
  const isIcon = icon != null || icon != undefined;
  console.log(isIcon);
  return (
    <InputContainer>
      {showLabel ? (
        <label className={labelFont} htmlFor={inputName}>
          {title}
        </label>
      ) : null}
      <div className='inputTextContainer'>
        {isIcon ? <span className='icon'>{icon}</span> : null}
        <input
          className={isIcon ? 'inputIcon' : ''}
          value={val}
          type={type}
          name={inputName}
          autoComplete='off'
          onChange={inputChange}
          placeholder={children}
          required
        />
      </div>
    </InputContainer>
  );
};

export default InputField;
