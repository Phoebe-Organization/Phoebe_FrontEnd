import styled, { keyframes, css } from 'styled-components';

interface CardProps {
  $imgSrc?: string;
}

export const Card = styled.div(
  ({ $imgSrc }: CardProps) => `
  height: 254px;
  width: 209px;
  border-radius: 17px;
  display:flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  background-image: url(${$imgSrc});
  object-fit: cover;
  background-size: cover;
  background-position: center;
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.02);
    ${CardContent} {
      transform: translateY(0px);
      opacity: 1;
    }
    ${CardSubContentContainer} {
      opacity: 0;
    }
  }
  cursor: pointer;
`,
);

export const CardImageBlur = styled.div`
  position: absolute;
  z-index: -1;
  top: 33%;
  left: 15%;
  width: 167px;
  height: 203px;
  opacity: 0.6;
  filter: blur(22.5px);
  background: #879d9f;
`;

export const CardSubContentContainer = styled.div`
  transition: opacity 0.3s;
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
`;

export const CardSubContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  color: #ffffff;
  padding: 20px;
  * {
    margin: 0;
    text-align: left;
  }
  h4 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  .attending {
    display: flex;
    align-items: center;
    p {
      text-align: left;
      margin-left: 4px;
      span {
        color: #fcffa4;
      }
    }
  }
`;

export const CardTag = styled.div`
  min-width: 64px;
  min-height: 29px;
  backdrop-filter: blur(7.5px);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 7px;
  * {
    margin: 0px 2px;
  }
  p {
    font-family: proxima-nova, sans-serif;
    color: #ffffff;
    font-weight: 400;
  }
  svg {
    color: #ffffff;
    opacity: 0.5;
  }
`;

export const CardContent = styled.div`
  will-change: transform, opacity;
  transition: transform 0.45s, opacity 0.45s;
  opacity: 0;
  transform: translateY(70px);
  padding: 10px 11px;
  width: 189px;
  height: 104px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(11.5px);
  box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background: linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #ffffff 79.72%);
  border-radius: 15px;
  .content-title {
    text-align: left;
    font-family: proxima-nova, sans-serif;
    margin-bottom: 4px;
    h4 {
      font-size: 16px;
      color: #111417;
      font-weight: 700;
      margin: 0;
    }
  }
  .content-location {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17px;
    p {
      margin: 0;
      margin-left: 6px;
      text-align: left;
      font-family: proxima-nova, sans-serif;
      line-height: 113.8%;
      letter-spacing: -0.02em;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #111417;
      font-size: 14px;
      opacity: 0.7;
    }
  }
  .content-details-button-container {
    margin-top: 14px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    p {
      margin: 0;
      margin-left: 3px;
      font-family: proxima-nova, sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 115%;
      color: #111417;
      opacity: 0.5;
    }
  }
`;
