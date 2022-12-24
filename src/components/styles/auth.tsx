import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-height: 100vh;
`;

export const SignupField = styled.div`
  width: 50%;
  margin-bottom: 5em;
  margin-top: 2em;
  height: 100%;
`;

export const SigninField = styled.div`
  margin-top: 2em;
  width: 50%;
`;

export const AuthBackButton = styled.div`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  margin-left: 3em;
  :hover {
    outline: none;
    border: none;
  }
`;

export const SigninContentContainer = styled.div`
  min-height: 600px;
`;

export const SignupContentContainer = styled.div`
  min-height: 800px;
`;

export const AuthVideoContainer = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-family: Dancing Script, cursive;
  margin: 10px 0;
`;

export const SubTitle = styled.h4`
  font-family: Times New Roman, Times, serif;
  color: #a3a3a3;
  font-size: 20px;
  letter-spacing: -1px;
  span {
    font-family: Dancing Script, cursive;
  }
`;

export const SpecialText = styled.span`
  font-family: Dancing Script, cursive;
`;

export const ErrorMessage = styled.div`
  color: red;
  width: 300px;
  display: flex;
  margin: auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  button {
    margin: 10px 0;
  }
`;

interface Icons {
  fontSize: string;
  color?: string;
}

export const ContinueWithButton = styled.button(
  ({ fontSize, color = 'inherit' }: Icons) => `
  width: 350px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f9ff;
  margin: 10px 0;
  :hover {
    color: #9797f1;
  }
  span {
    margin: 0px 5px;
    svg {
      font-size: ${fontSize};
      color: ${color};
    }
  }
`,
);

export const Video = styled.video`
  position: fixed;
  top: 0;
  background-size: cover;
  height: 100%;
  background-position: center;
  width: 50vw;
  object-fit: cover;
  overflow: hidden;
`;

export const Divider = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    width: 140px;
    height: 1px;
    background-color: #cfcfcf;
    margin: 0px 10px;
  }
  p {
    margin: 0px;
    font-size: 10px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 4em;
  div {
    margin: 10px 0;
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ChangeAuthMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 10em;
`;
