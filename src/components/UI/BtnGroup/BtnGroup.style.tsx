import styled from 'styled-components';

export const BtnGroupContainer = styled.div`
  ${({ theme }) => {
    const { colors, button } = theme;

    return `        
      background-color: ${colors.secondaryBg};

      .btn--group {
        border-radius: 0.375rem;
        display: inline-flex;
        position: relative;
        vertical-align: middle;
      }

      .btn-check {
        clip: rect(0,0,0,0);
        pointer-events: none;
        position: absolute;
      }

      .btn-check:checked + .btn--label {
        background-color: ${colors.active};
      }

      .btn--label {
        background-color: ${colors.primary};
        border-color: transparent;
        box-shadow: 0 1px 1px 0 rgba(var(${colors.elevationBaseColor},60,75,100),.14),0 2px 1px -1px rgba(var(${colors.elevationBaseColor},60,75,100),.12),0 1px 3px 0 rgba(var(${colors.elevationBaseColor},60,75,100),.2);        
        border: ${button.borderWidth} solid transparent;
        border-radius: ${button.borderRadius};
        color: ${colors.buttonColor};
        cursor: pointer;
        display: inline-block;
        padding: ${button.paddingY} ${button.paddingX};
        text-align: center;
        text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        -webkit-user-select: none;
        user-select: none;
        vertical-align: middle;      
      }

      .btn--light {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .btn--dark {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      svg {
        font-size: 1rem;
        height: 1rem;
        width: 1rem;
      }    
    `;
  }}
`;
