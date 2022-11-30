import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
    display: flex;
    flex: 1;
    height: 3.188rem;
    border-radius: 6px;
    gap: 0.5rem;
`;

interface PaymentMethodProps {
    selected: boolean;
}

export const PaymentMethod = styled.div<PaymentMethodProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.1rem;
    border-radius: 6px;
    gap: 0.3rem;

    background-color: ${(props) =>
        props.theme.colors[
            props.selected ? "brand-purple-light" : "base-button"
        ]};

    border: 1px solid
        ${(props) =>
            props.theme.colors[
                props.selected ? "brand-purple" : "base-button"
            ]};

    span {
        font-size: ${({ theme }) => theme.fontSizes["bold-s"]};
        color: ${({ theme }) => theme.colors["base-text"]};
    }

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
`;
