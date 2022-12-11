import iPhone from '../../../assets/iPhoneImage.png';
import {
  AppStoreButton,
  AppStoreButtonContainer,
  FloatingShadow,
  DownloadAppContainer,
  IPhoneBackgroundImage,
  IPhoneImage,
  IPhoneImageContainer,
  Special,
} from '../../styles/landingpage';
import FloatingImg from '../../../assets/floatingShadow.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Phoebe from '../../../assets/phoebe.svg';

export const DownloadApp = () => {
  return (
    <DownloadAppContainer>
      <IPhoneImageContainer>
        <IPhoneBackgroundImage>
          <IPhoneImage src={iPhone} />
        </IPhoneBackgroundImage>
        <FloatingShadow src={FloatingImg} />
      </IPhoneImageContainer>
      <div className='downloadApp'>
        <img src={Phoebe} className='phoebeLogo' />

        <p className='boldTxt'>
          Download the app
          <br />
          for a unique <Special>experience!</Special>
        </p>
        <AppStoreButtonContainer>
          <AppStoreButton>
            <FaApple />
            <p>
              Download on the <br />
              <span className='bigTxt'>App Store</span>
            </p>
          </AppStoreButton>

          <AppStoreButton>
            <FaGooglePlay />
            <p>
              Get it on <br />
              <span className='bigTxt'>Google Play</span>
            </p>
          </AppStoreButton>
        </AppStoreButtonContainer>
      </div>
    </DownloadAppContainer>
  );
};
