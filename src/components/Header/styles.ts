import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 8rem;
`;

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 0.75rem;
`;

export const CartButton = styled.button`
    border: 0;
    outline: 0;
    cursor: pointer;
`;

export const Localization = styled(CartButton)`
    display: flex;
    align-items: center;

    background: ${(props) => props.theme.colors["brand-purple-light"]};
    color: ${(props) => props.theme.colors["brand-purple-dark"]};
    gap: 5px;

    border-radius: 6px;
    padding: 0.5rem;

    svg {
        color: ${(props) => props.theme.colors["brand-purple"]};
    }
`;

export const Cart = styled(CartButton)`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors["brand-yellow-light"]};

    padding: 0.5rem;
    border-radius: 6px;

    svg {
        color: ${(props) => props.theme.colors[`brand-yellow-dark`]};
    }

    span {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        background: ${(props) => props.theme.colors["brand-yellow-dark"]};
        color: ${(props) => props.theme.colors["brand-yellow-light"]};
        padding: 0.2rem 0.45rem;
        border-radius: 50%;
        font-size: 0.6rem;
    }
`;
