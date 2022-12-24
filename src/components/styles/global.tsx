import styled, { createGlobalStyle } from 'styled-components';
// styled.div
export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  a {
    font-weight: normal;
    color: #55c2da;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }

  button {
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.25s;
    height: 40px;
    &:hover {
      border-color: #646cff;
    }
    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.3;
    }
  }

  .boldTxt {
    font-weight: 700;
  }
  .font-roboto {
    font-family: Roboto, sans-serif;
  }
  .font-roboto-condensed {
    font-family: Roboto Condensed, sans-serif;
  }
  .font-times {
    font-family: Times New Roman, Times, serif;
  }
  .font-dancing {
    font-family: Dancing Script, cursive;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const VerticalDivider = styled.div`
  height: 300px;
  width: 1px;
  min-width: 1px;
  background-color: #b1b1b17c;
  margin: 0px 40px;
`;
