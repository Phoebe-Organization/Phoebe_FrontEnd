import styled, { keyframes, css } from 'styled-components';

/******************* Hero Styling *******************/

export const HeroImage = styled.div({
  display: 'flex',
  alignItems: 'center',
  img: {
    maxWidth: '500px',
  },
});

export const HeroContainer = styled.div({
  height: '500px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

export const HeroContent = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  h1: {
    fontSize: '2.5em',
    textAlign: 'left',
    marginBottom: '12px',
  },
  p: {
    textAlign: 'left',
    fontSize: '1.2em',
    marginBottom: '2.5em',
  },
});

/******************* Downloads App Styling *******************/
export const backgroundAnimation = keyframes`
    0%{
        background-position:10% 0%;
    }
    50%{
        background-position:91% 100%;
    }
    100%{
        background-position:10% 0%;
    }
`;

export const DownloadAppContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: '1400px',
  minHeight: '600px',
  margin: 'auto',
  '.downloadApp': {
    fontSize: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '.phoebeLogo': {
      width: '100px',
    },
  },
});

export const Special = styled.span`
  background: linear-gradient(90deg, rgba(151, 36, 209, 1) 0%, rgba(232, 20, 218, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 2s linear infinite;
`;

export const IPhoneImage = styled.img({
  width: '250px',
  height: '400px',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'cover',
  overflow: 'hidden',
});

export const FloatingShadow = styled.img({
  width: '200px',
});

export const IPhoneImageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const AppStoreButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
});

export const AppStoreButton = styled.div({
  margin: '0px 10px',
  cursor: 'pointer',
  backgroundColor: '#000000',
  color: 'white',
  borderRadius: '5px',
  width: '130px',
  height: '41px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  '.bigTxt': {
    textTransform: 'capitalize',
    fontSize: '14px',
  },
  p: {
    textTransform: 'uppercase',
    fontSize: '7px',
    lineHeight: '13px',
    margin: '0px',
    textAlign: 'left',
  },
  svg: {
    fontSize: '24px',
  },
});

export const IPhoneBackgroundImage = styled.div({
  position: 'relative',
  height: '350px',
  width: '168px',
  overflow: 'hidden',
  borderRadius: '27px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: "url('/src/assets/pexels-rodnae-productions-8217860.jpg')",
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

/******************* Footer Styling *******************/

export const FooterContainer = styled.div({
  minHeight: '400px',
  backgroundColor: '#403c56',
});
