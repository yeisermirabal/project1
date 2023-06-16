import styled from 'styled-components';

export const ExpensesContainer = styled.div` 
    ${({ theme }) => {
        const { colors } = theme;

        return `
            padding: 1rem;
            background-color: ${colors.cardBodyBg};
            border-radius: 0.375rem;
        `;
    }}   
    
`;