import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => {
    const { colors, font, gutter } = theme;

    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        min-height: 100%;

        @media (max-width: 600px) {
          font-size: 14px;
        }
      }

      body {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        background-color: ${colors.bodyBg};
        color: ${colors.bodyColor};
        font-family: ${font.family};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        min-height: 100%;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
      
      .icon {
        fill: currentcolor;
        color: inherit;
        display: inline-block;
        text-align: center;
        vertical-align: -0.125rem;
      }

      .container,
      .container-fluid {
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(var(${gutter.x})*.5);
        padding-right: calc(var(${gutter.x})*.5);
        width: 100%;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(var(${gutter.x})*-.5);
        margin-right: calc(var(${gutter.x})*-.5);
        margin-top: calc(var(${gutter.y})*-1);
      }
    
      .row > * {
        flex-shrink: 0;
        margin-top: var(${gutter.y});
        max-width: 100%;
        padding-left: calc(var(${gutter.x})*.5);
        padding-right: calc(var(${gutter.x})*.5);
        width: 100%;
      }

      .col {
        flex: 1 0;
      }
      
      @media(min-width: 576px) {
        .container {
          max-width: 540px;
        }
      }
      
      @media(min-width: 768px) {
        .container {
          max-width:720px;
        }
      }
      
      @media(min-width: 992px) {
        .container {
          max-width:960px;
        }
      }
      
      @media(min-width: 1200px) {
        .container {
          max-width:1140px;
        }
      }
      
      @media(min-width: 1400px) {
        .container {
          max-width:1320px;
        }
      }
    `;
  }}
`;

export default GlobalStyles;
