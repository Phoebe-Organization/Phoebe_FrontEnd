import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    border: 1px solid #e2e2e2;
    transition: border-color 0.1s linear;
    padding-left: 15px;
    position: relative;
    width: 100%;
    height: 35px;
    border-radius: 2px;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    &:focus {
      outline: none;
      border-color: #b3b3b3;
      transition: border-color 0.1s linear;
    }
  }
  label {
    width: 100%;
    display: flex;
    pointerevents: none;
    userselect: none;
    font-size: 20px;
    color: #000000;
    font-weight: 700;
    line-height: 1.3em;
  }
  .inputIcon {
    padding-left: 25px;
  }
  .icon {
    position: absolute;
    z-index: 2;
    top: 4px;
    left: 6px;
  }
  ,
  .inputTextContainer {
    position: relative;
  }
`;
