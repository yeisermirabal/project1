import styled from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }) => {
    const { colors, card } = theme;

    return `        
      word-wrap: break-word;
      background-clip: initial;
      background-color: ${colors.cardBg};
      border-radius: 0.375rem;
      box-shadow: 0 1px 1px 0 rgba(60,75,100,.14),0 2px 1px -1px rgba(60,75,100,.12),0 1px 3px 0 rgba(60,75,100,.2);
      display: flex;
      flex-direction: column;
      min-width: 0;
      position: relative;          

      .card-header {
        background-color: ${colors.cardHeaderBg};
        border-bottom: 1px solid ${colors.cardBorderColor};
        margin-bottom: 0;
        padding: ${card.paddingY} ${card.paddingX};
        border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
      }

      .card-body {
        flex: 1 1 auto;
        padding: 1rem;
      }
    `;
  }}
`;
