import styled, { keyframes, css } from 'styled-components';

const blurAnimation = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(1px);
  }
  50% {
    background-color: rgba(0, 0, 0, 0.469);
    backdrop-filter: blur(5px);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
  }
`;

const onboardingAnimation = keyframes`
0%, 12.5%, 25%, 37.5%{
  opacity: 0;
}
50% {
  opacity: 0.5;
}
100% {
  opacity: 1;
}
`;

export const OnboardingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${blurAnimation} 0.6s linear;
`;

export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 700px;
  height: 550px;
  border-radius: 40px;
  padding: 50px;
  animation: ${onboardingAnimation} 0.8s linear;
`;

export const OnboardingStepsContainer = styled.div`
  height: 375px;
  width: 100%;
  background-color: green;
`;

export const OnboardingProgressionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
