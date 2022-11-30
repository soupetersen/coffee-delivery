import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 19.375rem;
    padding: 1rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }

    h2 {
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fontSizes["title-s"]};
        font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
        color: ${({ theme }) => theme.colors["base-title"]};
        font-weight: bold;
    }

    p {
        margin-top: 0.5rem;
        color: ${({ theme }) => theme.colors["base-label"]};
        font-size: ${({ theme }) => theme.fontSizes["regular-s"]};
        text-align: center;
        width: 90%;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.5rem;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};

    span {
        font-size: ${({ theme }) => theme.fontSizes["components-tag"]};
        text-transform: uppercase;
        font-weight: bold;
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1.1rem;
    margin-top: 1rem;
`;

export const PriceContainer = styled.div`
    display: flex;
    gap: 0.3rem;

    p {
        font-size: ${({ theme }) => theme.fontSizes["regular-s"]};
        color: ${({ theme }) => theme.colors["base-text"]};
    }

    span {
        font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
        font-size: ${({ theme }) => theme.fontSizes["title-m"]};
        color: ${({ theme }) => theme.colors["base-text"]};
        font-weight: bold;
    }
`;
