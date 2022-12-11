import styled, { createGlobalStyle } from 'styled-components';
// styled.div
export const GlobalStyle = createGlobalStyle({
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  body: {
    margin: '0',
    width: '100%',
    minHeight: '100vh',
    textAlign: 'center',
  },

  h1: {
    fontSize: '3.2em',
    lineHeight: '1.1',
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'border-color 0.25s',
    '&:hover': {
      borderColor: '#646cff',
    },
    '&:focus, &:focus-visible': {
      outline: '4px auto -webkit-focus-ring-color',
    },
    '&:disabled': {
      pointerEvents: 'none',
      opacity: '0.3',
    },
  },

  '.boldTxt': {
    fontWeight: '700',
  },
  '.font-roboto': {
    fontFamily: 'Roboto, sans-serif',
  },
  '.font-roboto-condensed': {
    fontFamily: 'Roboto Condensed, sans-serif',
  },
  '.font-times': {
    fontFamily: 'Times New Roman, Times, serif',
  },
  '.font-dancing': {
    fontFamily: 'Dancing Script, cursive',
  },
});
