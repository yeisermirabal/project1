import styled from 'styled-components';

export const ChartBarContainer = styled.div` 
    ${({ theme }) => {
        const { colors } = theme;
        
        return `
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;

            .chart-bar--inner {
                height: 100%;
                width: 1.5rem;
                border: 1px solid ${colors.bodyBg};
                border-radius: 1rem;
                background-color: ${colors.secondary};
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            .chart-bar--fill {
                background-color: ${colors.primary};
                width: 100%;
                transition: all 0.3s ease-out;
            }
        `;
    }}
`;