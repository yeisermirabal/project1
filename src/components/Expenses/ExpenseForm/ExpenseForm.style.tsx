import styled from 'styled-components';

export const ExpenseFormContainer = styled.form`
    ${({ theme }) => {
        const { colors, button } = theme;

        return ` 
            .new-expense--label {
                display: inline-block;
                margi-bottom:0.5rem;
            }

            input[type="date"]::-webkit-calendar-picker-indicator {
                filter: invert(1) hue-rotate(180deg);
            }

            .new-expense--control {
                appearance: none;
                background-clip: padding-box;
                background-color: ${colors.inputBg};
                border: 1px solid ${colors.inputBorder};
                border-radius: .375rem;
                color: ${colors.bodyColor};
                display: block;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                padding: .375rem .75rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                width: 100%;

                &:focus {
                    background-color: ${colors.inputBg};
                    border-color: ${colors.inputBorder};
                    box-shadow: 0 0 0 0.25rem rgba(50,31,219,.25);
                    color: ${colors.bodyColor};
                    outline: 0;
                }
            }
        `;
    }}
`;
