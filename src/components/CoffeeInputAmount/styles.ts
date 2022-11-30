import styled, { css } from "styled-components";

export const CoffeeAmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    width: 4.5rem;
    height: 2.375rem;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors["base-button"]};

    & span {
        color: ${({ theme }) => theme.colors["base-title"]};
        font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
    }

    & button {
        color: ${({ theme }) => theme.colors["brand-purple"]};
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 3rem;
        height: 2.375rem;
        transition: 0.25s;

        & svg {
            font-size: 1.5rem;
        }

        &:hover {
            color: ${({ theme }) => theme.colors["brand-purple-dark"]};
        }
    }
`;
