import styled from 'styled-components';

export const ExpenseFilterContainer = styled.div`   
    .expense-filter {
        display: flex;
        align-items: center;
        justify-content: space-between;    
        
        select {
            max-width: 10rem;
        }

        .expense-filter--actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 1rem;
            flex: 1 1 auto;
            max-width: 20rem;
            flex-wrap: wrap;
        }
    }
`;