import styled from 'styled-components';

export const HeaderContainer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;

    return `        
        background-color: ${ colors.secondaryBg};
        padding: 1rem;
        margin-bottom: 1.5rem;
        
        .header--wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header--brand {
          width: 3.75rem;
          height: 2.5rem;
        }
    `;
  }}
`;
