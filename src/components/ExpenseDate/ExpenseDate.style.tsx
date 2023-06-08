import styled from 'styled-components';

export const ExpenseDateContainer = styled.div`
    ${({ theme }) => {
        const { colors } = theme;

        return `  
            margin-right: 1rem; 
            width: 100px;
            background: ${colors.primary};
            text-align: center;
            padding: 1rem;   
            font-size: 0.8rem;            
            font-weight: 600;
            text-transform: uppercase;
            border-radius: 0.375rem;

            .expense-date--day {
                font-size: 1.8rem;                
                line-height: 1;
                margin-top: 0.5rem;
            }
        `;
    }}
`;
