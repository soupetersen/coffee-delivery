import styled from "styled-components";

export const CheckoutOrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3rem 8rem;

    width: 100%;

    form {
        display: flex;
        width: 100%;
        gap: 1.5rem;
    }
`;

export const Subtitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes["title-s"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: bold;
`;

export const BaseOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    gap: 1rem;
`;

export const LeftOrderContainer = styled(BaseOrderContainer)`
    width: 100%;
`;

export const AddressContainer = styled(BaseOrderContainer)`
    width: 100%;
    padding: 2rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const OrderHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.5rem;

    & div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        h2 {
            font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
            color: ${({ theme }) => theme.colors["base-subtitle"]};
        }

        p {
            font-size: ${({ theme }) => theme.fontSizes["regular-s"]};
            color: ${({ theme }) => theme.colors["base-text"]};
        }
    }

    svg {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;

export const PaymentContainer = styled(BaseOrderContainer)`
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const OrdersContainer = styled(BaseOrderContainer)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CoffeesOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15rem;
    padding: 2rem;
    gap: 1rem;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors["base-card"]};
`;
