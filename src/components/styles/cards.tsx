import styled, { keyframes, css } from 'styled-components';

interface CardProps {
  $imgSrc?: string;
}

export const Card = styled.div(
  ({ $imgSrc }: CardProps) => `
  height: 254px;
  width: 209px;
  margin: 0px 10px;
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
    }
    cursor: pointer;
`,
);

export const CardImageBlur = styled.div(
  ({ $imgSrc }: CardProps) => `
  position: absolute;
  z-index: -1;
  top: 33%;
  left: 15%;
  width: 167px;
  height: 203px;
  opacity: 0.6;
  filter: blur(22.5px);
  background-image: url(${$imgSrc});
  object-fit: cover;
  background-size: cover;
  background-position: center;
  `,
);

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
    color: #ffffff;
  }
`;

export const CardContent = styled.div`
  width: 189px;
  height: 104px;
  webkitbackdrop-filter: blur(8px);
  backdrop-filter: blur(11.5px);
  boxshadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background: linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #ffffff 79.72%);
  border-radius: 15px;
`;
