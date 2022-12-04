import styled from 'styled-components';

export const InputContainer = styled.div({
  position: "relative",
  width: "350px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  input: {
    border: "none",
    border: "2px solid #e2e2e2",
    transition: "border-color 0.1s linear",
    paddingLeft: "15p"
  }
})
  position: relative;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    border: none;
    border: 2px solid #e2e2e2;
    transition: border-color 0.1s linear;
    padding-left: 15px;
    position: relative;
    width: 100%;
    height: 35px;
    border-radius: 2px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

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
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    line-height: 1.3em;
  }
`;
