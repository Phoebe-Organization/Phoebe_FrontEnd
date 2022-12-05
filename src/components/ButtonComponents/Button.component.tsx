import React from 'react';
import { ButtonSizes } from './ButtonSizes';
import { ButtonStyles } from './ButtonStyles';
import { StyledButton } from '../styles/button';

export interface ButtonProps {
  action: () => void;
  btnSize: ButtonSizes;
  btnStyle: ButtonStyles;
  disabled: boolean;
  children: string;
}

const Button = (btnProps: ButtonProps) => {
  const { action, btnSize, btnStyle, disabled, children } = btnProps;
  return (
    <StyledButton
      $btnSize={btnSize}
      $btnStyle={btnStyle}
      disabled={disabled}
      onClick={() => action()}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
