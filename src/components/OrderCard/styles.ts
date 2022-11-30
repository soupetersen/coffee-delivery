import styled from "styled-components";

export const OrderCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 8px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors["base-card"]};

    img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
    }
`;

export const OrderCardInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`;

export const OrderCardTitle = styled.p`
    display: flex;
    flex-direction: column;

    font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const OrderActions = styled.div`
    display: flex;
    gap: 1rem;
`;

export const OrderCardPrice = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes["bold-m"]};
    color: ${({ theme }) => theme.colors["base-text"]};
`;
