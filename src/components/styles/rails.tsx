import styled, { keyframes, css } from 'styled-components';

export const RailParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RailContainer = styled.div`
  max-width: 1145px;
  overflow: hidden;
  padding: 20px 10px 70px 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RailContent = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  transition: transform 0.45s;
`;

export const RailPageLeft = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
  min-width: 45px;
  font-size: 45px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
`;
export const RailPageRight = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
  font-size: 45px;
  min-width: 45px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
`;
