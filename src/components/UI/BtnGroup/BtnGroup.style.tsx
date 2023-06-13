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
