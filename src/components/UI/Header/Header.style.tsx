import styled from 'styled-components';

export const HeaderContainer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;

    return `        
        background-color: ${ colors.secondaryBg};
        padding: 1rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 2px 0 rgba(60,75,100,.14),0 3px 1px -2px rgba(60,75,100,.12),0 1px 5px 0 rgba(60,75,100,.2);
        
        .header--wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header--brand {
          width: 3.75rem;
          height: 2.5rem;
          color: ${colors.primary};
        }
    `;
  }}
`;
