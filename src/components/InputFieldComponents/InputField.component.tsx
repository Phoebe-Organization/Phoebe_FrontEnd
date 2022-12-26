import React from 'react';
import { IconType } from 'react-icons';
import { FontFamily } from '../../globals/fonts';
import { InputContainer } from '../styles/input';
import { BiErrorCircle } from 'react-icons/bi';

interface InputFieldProps {
  val: string | number | readonly string[];
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  children?: string;
  title: string;
  showLabel?: boolean;
  labelFont?: FontFamily;
  icon?: JSX.Element;
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputWidth?: number;
  isValid?: boolean;
  inputStyle?: React.CSSProperties;
  dropDown?: JSX.Element;
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
  inputWidth = 350,
  isValid = true,
  inputStyle,
  dropDown,
}: InputFieldProps) => {
  const isIcon = icon != null || icon != undefined;

  const defaultValidationStyle = isValid
    ? undefined
    : { backgroundColor: '#ef9a9ab2', borderColor: '#ef53509f', borderWidth: '3px' };
  const inputStyling = { ...defaultValidationStyle, ...inputStyle };
  return (
    <InputContainer style={{ width: `${inputWidth}px` }}>
      {showLabel ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            margin: '0px',
          }}
        >
          <label className={labelFont} htmlFor={inputName} style={{ marginBottom: '0px' }}>
            {title}
          </label>
          {isValid ? null : <BiErrorCircle color='#EF5350' />}
        </div>
      ) : null}
      <div className='inputTextContainer'>
        {isIcon ? <span className='icon'>{icon}</span> : null}
        <input
          style={inputStyling}
          className={isIcon ? 'inputIcon' : ''}
          value={val}
          type={type}
          name={inputName}
          autoComplete='off'
          onChange={inputChange}
          placeholder={children}
          required
        />
        {dropDown}
      </div>
    </InputContainer>
  );
};

export default InputField;
