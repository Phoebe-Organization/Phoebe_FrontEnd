import styled, { CSSObject } from 'styled-components';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';

interface ButtonStyledComponent {
  $btnSize: ButtonSizes;
  $btnStyle: ButtonStyles;
}

const $primaryColor = '#e814da';
// const $secondaryColor = 'rgba(151, 36, 209, 1)';
const $secondaryColor = '#55c2da';

const $primaryTextColor = '#ffffff';
const $secondaryTextColor = '#000000';
const $tertiaryTextColor = '#55c2da';

const $sizeLarge = '350px';
const $sizeMedium = '200px';
const $sizeSmall = '100px';
const $sizeXSmall = '60px';

export const StyledButton = styled.button(({ $btnSize, $btnStyle }: ButtonStyledComponent) => {
  const obj: CSSObject = {};
  obj['borderRadius'] = '4px';
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
    case ButtonSizes.XSMALL:
      obj['width'] = $sizeXSmall;
      obj['height'] = '30px';
      obj['fontSize'] = '14px';
      break;
    case ButtonSizes.FILL:
      obj['width'] = '100%';
      break;
    default:
      break;
  }
  switch ($btnStyle) {
    case ButtonStyles.SOLID:
      obj['color'] = $primaryTextColor;
      obj['background-color'] = '#1a1a1a;';
      break;
    case ButtonStyles.PRIMARY:
      obj['color'] = $primaryTextColor;
      obj['background-color'] = $primaryColor;
      break;
    case ButtonStyles.SECONDARY:
      obj['color'] = $primaryTextColor;
      obj['background-color'] = $secondaryColor;
      break;
    case ButtonStyles.TRANSPARENT:
      obj['border'] = '1px solid black';
      obj['background-color'] = 'transparent';
      obj['color'] = $secondaryTextColor;
      break;
    case ButtonStyles.CARD:
      obj['color'] = $tertiaryTextColor;
      obj['background-color'] = '#ffffff';
      obj['borderRadius'] = '8px';
    default:
      break;
  }
  return obj;
});
