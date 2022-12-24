import styled from 'styled-components';

export const InterestsTitle = styled.h1`
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

export const InterestButton = styled.div`
  background-color: #fe6884;
  color: #ffffff;
  border-radius: 40px;
  padding: 10px 20px;
  margin: 2px 5px;
  cursor: pointer;
`;

export const InterestButtonContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  .active {
    background-color: red;
  }
`;

export const InterestButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  min-width: 500px;
`;

export const InterestsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
