import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#321fdb',
    secondary: '#9da5b1', 
    active: '#5b4ce2', 
    bodyBg: '#ebedef',
    bodyColor: 'rgba(44,56,74,.681)',
    secondaryBg: '#fff',
    elevationBaseColor: '0,0,0',
    buttonColor: 'hsla(0,0%,100%,.87)',
    buttonHoverBg: '#5141e0',
    buttonHoverBorderColor: '#4735df',
    buttonSecundaryBg: '#9da5b1',
    cardBg: '#fff',
    cardBodyBg: '#f9fafa',
    cardHeaderBg: 'rgba(0,0,21,.03)',
    cardBorderColor: 'rgba(0,0,21,.175)',
    inputBg: '#fff',
    inputBorder: '#b1b7c1'
  },
  button: {
    borderWidth: '1px',
    borderRadius: '0.375rem',
    paddingX: '0.75rem',
    paddingY: '0.375rem'
  },
  font: {
    family: 'Arial, sans-serif'
  },
  gutter: {
    x: '1.5rem',
    y: '1rem'
  },
  card: {
    paddingY: '0.5rem',
    paddingX: '1rem'
  }
};

export default theme;
