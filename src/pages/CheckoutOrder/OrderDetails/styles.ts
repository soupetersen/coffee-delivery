import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
        font-size: ${({ theme }) => theme.fontSizes["bold-s"]};
        color: ${({ theme }) => theme.colors["base-text"]};
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes["bold-l"]};
        color: ${({ theme }) => theme.colors["base-subtitle"]};
        font-weight: bold;
    }
`;
