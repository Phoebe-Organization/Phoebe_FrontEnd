import styled, { CSSObject } from 'styled-components';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';

interface ButtonStyledComponent {
  $btnSize: ButtonSizes;
  $btnStyle: ButtonStyles;
}

const $primaryColor = 'rgba(232, 20, 218, 1)';
// const $secondaryColor = 'rgba(151, 36, 209, 1)';
const $secondaryColor = '#55c2da';

const $primaryTextColor = '#ffffff';
const $secondaryTextColor = '#000000';

const $sizeLarge = '350px';
const $sizeMedium = '200px';
const $sizeSmall = '100px';

export const StyledButton = styled.button(({ $btnSize, $btnStyle }: ButtonStyledComponent) => {
  const obj: CSSObject = {};
  switch ($btnSize) {
    case ButtonSizes.LARGE:
      obj['width'] = $sizeLarge;
      break;
    case ButtonSizes.MEDIUM:
      obj['width'] = $sizeMedium;
      break;
    case ButtonSizes.SMALL:
      obj['width'] = $sizeSmall;
      break;
    default:
      break;
  }
  switch ($btnStyle) {
    case ButtonStyles.SOLID:
      (obj['color'] = $primaryTextColor), (obj['backgroundColor'] = '#1a1a1a;');
      break;
    case ButtonStyles.PRIMARY:
      (obj['color'] = $primaryTextColor), (obj['backgroundColor'] = $primaryColor);
      break;
    case ButtonStyles.SECONDARY:
      (obj['color'] = $primaryTextColor), (obj['backgroundColor'] = $secondaryColor);
      break;
    case ButtonStyles.TRANSPARENT:
      (obj['border'] = '1px solid black'),
        (obj['backgroundColor'] = 'transparent'),
        (obj['color'] = $secondaryTextColor);
      break;
    default:
      break;
  }
  obj['button'] = {
    borderRadius: '4px',
  };
  return obj;
});
