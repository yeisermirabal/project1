import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => {
    const { colors, font, gutter, button } = theme;

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

      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: ${colors.secondary};
      }

      ::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${colors.primary};
      }

      .btn {        
        box-shadow: 0 1px 1px 0 rgba(60,75,100,.14),0 2px 1px -1px rgba(60,75,100,.12),0 1px 3px 0 rgba(60,75,100,.2);        
        border: ${button.borderWidth} solid ${colors.primary};
        border-radius: ${button.borderRadius};   
        color: ${colors.buttonColor};     
        cursor: pointer;
        display: inline-block;
        padding: ${button.paddingY} ${button.paddingX};
        text-align: center;
        text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        user-select: none;
        vertical-align: middle;      
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;  

        &:disabled {
          opacity: 0.65;
          pointer-events: none;
        }

        &.primary {
          background-color: ${colors.primary};
        }

        &.secondary {
          background-color: ${colors.secondary};
          border-color: transparent;

          &:hover {
            background-color: ${colors.buttonSecundaryBg};
            border-color: transparent;
          }
        }

        &:hover {
          background-color: ${colors.buttonHoverBg};
          border-color: ${colors.buttonHoverBorderColor};
          color: ${colors.buttonColor};
        }
      }

      input,
      select {
        appearance: none;        
        background-color: ${colors.inputBg};
        border: 1px solid ${colors.inputBorder};
        border-radius: .375rem;
        color: ${colors.bodyColor};
        display: block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;        
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        width: 100%;

        &:focus {
          background-color: ${colors.inputBg};
          border-color: ${colors.inputBorder};
          box-shadow: 0 0 0 0.25rem rgba(50,31,219,.25);
          color: ${colors.bodyColor};
            outline: 0;
        }
        &.error-input {
          border-color: red;
        }
      }

      input {
        background-clip: padding-box;
        padding: .375rem .75rem;
      }

      select {      
        background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjNjM2ZjgzJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nbTIgNSA2IDYgNi02Jy8+PC9zdmc+);
        background-repeat: no-repeat;
        background-size: 16px 12px;
        padding: 0.375rem 2.25rem 0.375rem 0.75rem;
        background-position: right 0.75rem center;        
        word-wrap: normal;

        & > option {
          background-color: ${colors.cardHeaderBg};
        }
      }

      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1) hue-rotate(180deg);
      }   

      label {
        display: inline-block;
        margin-bottom:0.5rem;
        font-weight: 500;
      }

      .text-center {
        text-align: center;
      }

      .container,
      .container-fluid {
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(${gutter.x}*.5);
        padding-right: calc(${gutter.x}*.5);
        width: 100%;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(${gutter.x}*-.5);
        margin-right: calc(${gutter.x}*-.5);
        margin-top: calc(${gutter.y}*-1);
      }
    
      .row > * {
        flex-shrink: 0;
        margin-top: ${gutter.y};
        max-width: 100%;
        padding-left: calc(${gutter.x}*.5);
        padding-right: calc(${gutter.x}*.5);
        width: 100%;
      }

      .col-12 {
        flex: 0 0 auto;
        width: 100%;
      }

      .mb-4 {
        margin-bottom: 1.5rem;
      }

      .mr-3 {
        margin-right: 1rem;
      }
     
      @media(min-width: 576px) {
        .container {
          max-width: 540px;
        }
        .col-sm-6 {
          flex: 0 0 auto;
          width: 50%;
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
        .col-lg-4 {
          flex: 0 0 auto;
          width: 33.33333333%
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
