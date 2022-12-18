import styled, { keyframes, css } from 'styled-components';

/******************* Hero Styling *******************/

export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 500px;
  }
`;

export const HeroContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 2.5em;
    text-align: left;
    margin-bottom: 12px;
  }
  p {
    text-align: left;
    font-size: 1.2em;
    margin-bottom: 2.5em;
  }
`;

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

export const DownloadAppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  max-width: 1400px;
  min-height: 600px;
  margin: auto;
  .download-app {
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .phoebe-logo {
      width: 100px;
    }
  }
`;

export const Special = styled.span`
  background: linear-gradient(90deg, rgba(151, 36, 209, 1) 0%, rgba(232, 20, 218, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 2s linear infinite;
`;

export const IPhoneImage = styled.img`
  width: 250px;
  height: 400px;

  background-size: cover;
  background-position: center;
  object-fit: cover;
  overflow: hidden;
`;

export const FloatingShadow = styled.img`
  width: 200px;
`;

export const IPhoneImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppStoreButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const AppStoreButton = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  width: 130px;
  height: 41px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .bigTxt {
    text-transform: capitalize;
    font-size: 14px;
  }
  p {
    text-transform: uppercase;
    font-size: 7px;
    line-height: 13px;
    margin: 0px;
    text-align: left;
  }
  svg {
    font-size: 24px;
  }
`;

export const IPhoneBackgroundImage = styled.div`
  position: relative;
  height: 350px;
  width: 168px;
  overflow: hidden;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/src/assets/pexels-rodnae-productions-8217860.jpg');
  object-fit: cover;
  background-size: cover;
  background-position: center;
`;

/******************* Footer Styling *******************/

export const FooterContainer = styled.div`
  min-height: 400px;
  background-color: #403c56;
`;
