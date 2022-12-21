import React from 'react';
import { ButtonSizes } from './ButtonSizes';
import { ButtonStyles } from './ButtonStyles';
import { StyledButton } from '../styles/button';

export interface ButtonProps {
  action?: () => void;
  btnSize?: ButtonSizes;
  btnStyle?: ButtonStyles;
  disabled?: boolean;
  children?: string;
}

const Button = ({
  action = () => null,
  btnSize = ButtonSizes.MEDIUM,
  btnStyle = ButtonStyles.PRIMARY,
  disabled = false,
  children,
}: ButtonProps) => {
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
