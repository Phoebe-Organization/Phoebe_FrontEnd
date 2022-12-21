import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
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
    height: 40px;
    border-radius: 6px;
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
    pointer-events: none;
    user-select: none;
    font-size: 20px;
    color: #000000;
    font-weight: 700;
    line-height: 1.3em;
  }
  .inputIcon {
    padding-left: 30px;
  }
  .icon {
    position: absolute;
    z-index: 2;
    top: 6px;
    left: 8px;
  }
  .inputTextContainer {
    position: relative;
  }
`;
