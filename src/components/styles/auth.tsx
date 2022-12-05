import styled from 'styled-components';

export const AuthContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
  maxHeight: '100vh',
});

export const SignupField = styled.div({
  width: '50%',
  marginBottom: '5em',
  marginTop: '2em',
  height: '100%',
});

export const SigninField = styled.div({
  marginTop: '2em',
  width: '50%',
});

export const AuthBackButton = styled.div({
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  marginLeft: '3em',
  ':hover': {
    outline: 'none',
    border: 'none',
  },
});

export const SigninContentContainer = styled.div({
  minHeight: '600px',
});

export const SignupContentContainer = styled.div({
  minHeight: '800px',
});

export const AuthVideoContainer = styled.div({
  position: 'relative',
  width: '50%',
  overflow: 'hidden',
  maxHeight: '100vh',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const TitleContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px 0',
});

export const Title = styled.h1({
  fontFamily: 'Dancing Script, cursive',
  margin: '10px 0',
});

export const SubTitle = styled.h4({
  fontFamily: 'Times New Roman, Times, serif',
  color: '#a3a3a3',
  fontSize: '20px',
  letterSpacing: '-1px',
  span: {
    fontFamily: 'Dancing Script, cursive',
  },
});

export const SpecialText = styled.span({
  fontFamily: 'Dancing Script, cursive',
});

export const ErrorMessage = styled.div({
  color: 'red',
  width: '300px',
  display: 'flex',
  margin: 'auto',
});

export const ButtonGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  button: {
    margin: '10px 0',
  },
});

interface Icons {
  fontSize: string;
  color?: string;
}

export const ContinueWithButton = styled.button(({ fontSize, color = 'inherit' }: Icons) => ({
  width: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f2f9ff',
  margin: '10px 0',
  ':hover': {
    color: '#9797f1',
  },
  span: {
    margin: '0px 5px',
    svg: {
      fontSize: fontSize,
      color,
    },
  },
}));

export const Video = styled.video({
  position: 'fixed',
  top: '0',
  backgroundSize: 'cover',
  height: '100%',
  backgroundPosition: 'center',
  width: '50vw',
  objectFit: 'cover',
  overflow: 'hidden',
});

export const Divider = styled.div({
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  span: {
    width: '140px',
    height: '1px',
    backgroundColor: '#cfcfcf',
    margin: '0px 10px',
  },
  p: {
    margin: '0px',
    fontSize: '10px',
  },
});

export const FormInputContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: '4em',
  div: {
    margin: '10px 0',
  },
});

export const TermsAndConditions = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const ChangeAuthMethod = styled.div({
  marginTop: '1em',
  marginBottom: '10em',
});
