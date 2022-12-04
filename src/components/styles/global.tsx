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
    maxWidth: '1280px',
    textAlign: 'center',
  },

  h1: {
    fontSize: '3.2em',
    lineHeight: '1.1',
  },

  button: {
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
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
});
