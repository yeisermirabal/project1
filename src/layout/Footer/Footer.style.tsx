import styled from 'styled-components';

export const FooterContainer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;

    return `
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: ${ colors.secondaryBg};
        font-size: 0.85rem;
    `;
  }}
`;
