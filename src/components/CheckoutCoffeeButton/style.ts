import styled from "styled-components";

export const CheckoutCard = styled.button`
    border: 0;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors["brand-purple-dark"]};

    &:hover {
        background: ${({ theme }) => theme.colors["brand-purple"]};
    }

    svg {
        color: ${({ theme }) => theme.colors["base-white"]};
    }
`;
