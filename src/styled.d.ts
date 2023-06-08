import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      active: string;
      bodyBg: string;
      bodyColor: string;
      secondaryBg: string;
      elevationBaseColor: string;
      buttonColor: string;
      cardBg: string;
      cardHeaderBg: string;
      cardBorderColor: string;
    },
    button: {
      borderWidth: string;
      borderRadius: string;
      paddingX: string
      paddingY: string
    },
    font: {
      family: string;
    },
    gutter: {
      x: string,
      y: string
    },
    card: {
      paddingY: string,
      paddingX: string,
    }
  }
}
