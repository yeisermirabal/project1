import styled from 'styled-components';

export const ExpenseDateContainer = styled.div`
    ${({ theme }) => {
        const { colors } = theme;

        return ` 
            background: ${colors.primary};             
            width: 8rem;            
            text-align: center;
            padding: 1rem;   
            margin-right: 1rem;         
            font-weight: 600;
            text-transform: uppercase;
            border-radius: 0.375rem;
            line-height: 1.1rem;
            color: #FFFFFF;

            .expense-date--day {
                font-size: 1.8rem;                
                line-height: 1;
                margin-top: 0.5rem;
            }
        `;
    }}
`;
