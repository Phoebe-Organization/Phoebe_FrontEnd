import styled, { keyframes, css } from 'styled-components';

export const RailTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 700;
`;

export const RailParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RailContainer = styled.div`
  max-width: 1145px;
  overflow: hidden;
  padding: 0px 10px 70px 0px;
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
  min-width: 45px;
  font-size: 45px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
`;
export const RailPageRight = styled.div`
  cursor: pointer;
  font-size: 45px;
  min-width: 45px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
`;

export const RailDivider = styled.div`
  height: 1px;
  background-color: #b1b1b17c;
  border-radius: 2px;
  margin-bottom: 20px;
`;
