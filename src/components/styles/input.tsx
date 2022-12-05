import styled from 'styled-components';

export const InputContainer = styled.div({
  position: 'relative',
  width: '350px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  input: {
    border: '2px solid #e2e2e2',
    transition: 'border-color 0.1s linear',
    paddingLeft: '15px',
    position: 'relative',
    width: '100%',
    height: '35px',
    borderRadius: '2px',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    '&:focus': {
      outline: 'none',
      borderColor: '#b3b3b3',
      transition: 'border-color 0.1s linear',
    },
  },
  label: {
    width: '100%',
    display: 'flex',
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: '20px',
    color: '#000000',
    fontFamily: 'Times New Roman, Times, serif',
    fontWeight: '700',
    lineHeight: '1.3em',
  },
});
