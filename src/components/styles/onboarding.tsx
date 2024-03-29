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
  justify-content: space-between;
  background-color: #ffffff;
  width: 700px;
  height: 700px;
  border-radius: 40px;
  padding: 50px;
  animation: ${onboardingAnimation} 0.8s linear;
`;

export const OnboardingStepsContainer = styled.div`
  height: 475px;
  width: 100%;
  overflow: scroll;
`;

export const OnboardingProgressionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GeolocationOption = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:last-child:hover {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  p {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    padding: 3px;
    &:last-child {
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  &::after {
    content: '';
    display: block;
    width: 350px;
    height: 1px;
    background: #e2e2e2;
  }
  &:last-child::after {
    width: 0;
    height: 0;
  }
`;

export const GeolocationOptionContainer = styled.div`
  width: 350px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #b3b3b3;
  border-top: none;
  position: absolute;
`;

export const GeolocationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProgressionBar = styled.div`
  border-radius: 10px;
  height: 6px;
  background: red;
`;

export const ProgressionBarContainer = styled.div`
  background: #b3b3b3;
  height: 6px;
  width: 200px;
  border-radius: 10px;
`;

export const OnboardingGroupsTitleContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 28px;
  }
`;

export const GroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 370px;
  overflow: scroll;
  padding-bottom: 50px;
`;

export const GroupContainer = styled.div`
  width: 400px;
  padding: 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  margin: 5px 0;
`;

export const GroupHeaderContent = styled.div`
  display: flex;
`;

export const GroupImage = styled.img`
  width: 90px;
  min-width: 90px;
  min-height: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
`;

export const GroupContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  width: 300px;
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const GroupName = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

export const GroupSubHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    text-align: left;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
`;

export const GroupInterests = styled.div`
  border-radius: 30px;
  height: 24px;
  padding: 7px 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0px 3px;
  background: #55c2da;
  color: #ffffff;
`;
export const GroupInterestsContainer = styled.div`
  display: flex;
`;

export const OnboardingDescriptionInput = styled.textarea`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  resize: vertical;
  word-wrap: break-word;
  :focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .character-count {
    width: 100%;
    max-width: 500px;
    text-align: right;
    font-size: 12px;
    color: #666;
    margin-top: 4px;
    .max-length {
      color: #f02f2f;
    }
  }
`;

export const GroupBottomContentConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
