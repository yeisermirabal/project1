import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#857dcc',
    secondary: '#a7a7a7', 
    active: '#9d97d6',  
    bodyBg: '#181924',
    bodyColor: 'hsla(0,0%,100%,.87)',
    secondaryBg: '#2a2b36',
    elevationBaseColor: '0,0,0',
    buttonColor: '#000015',
    buttonHoverBg: '#9791d4',
    buttonHoverBorderColor: '#918ad1',
    buttonSecundaryBg: '#8e8e8e',
    cardBg: '#24252f',
    cardHeaderBg: '#282933',
    cardBodyBg: 'hsla(0,0%,100%,.1)',
    cardBorderColor: 'hsla(0,0%,100%,.075)',
    inputBg: 'hsla(0,0%,100%,.05)',
    inputBorder: 'hsla(0,0%,100%,.09)'
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
