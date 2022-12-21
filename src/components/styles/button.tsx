import styled, { CSSObject } from 'styled-components';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';

interface ButtonStyledComponent {
  $btnSize: ButtonSizes;
  $btnStyle: ButtonStyles;
}

export const StyledButton = styled.button(({ $btnSize, $btnStyle }: ButtonStyledComponent) => {
  const obj: CSSObject = {};
  switch ($btnSize) {
    case ButtonSizes.LARGE:
      obj['width'] = '350px';
      break;
    case ButtonSizes.MEDIUM:
      obj['width'] = '100px';
      break;
    case ButtonSizes.SMALL:
      obj['width'] = '50px';
      break;
    default:
      break;
  }
  switch ($btnStyle) {
    case ButtonStyles.SOLID:
      (obj['color'] = '#ffffff'), (obj['backgroundColor'] = '#1a1a1a;');
      break;
    case ButtonStyles.PRIMARY:
      break;
    case ButtonStyles.SECONDARY:
      break;
    case ButtonStyles.TRANSPARENT:
      (obj['border'] = '1px solid black'),
        (obj['backgroundColor'] = 'transparent'),
        (obj['color'] = '#000000');
      break;
    default:
      break;
  }
  obj['button'] = {
    borderRadius: '4px',
  };
  return obj;
});
