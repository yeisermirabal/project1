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
    cardBg: '#24252f',
    cardHeaderBg: '#282933',
    cardBorderColor: 'hsla(0,0%,100%,.075)'
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
    y: '0'
  },
  card: {
    paddingY: '0.5rem',
    paddingX: '1rem'
  }
};

export default theme;
