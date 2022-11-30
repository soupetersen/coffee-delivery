import styled from "styled-components";

export const RemoveOrderButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.688rem;
    height: 2.375rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    border: none;
    cursor: pointer;
    outline: none;
    transition: 0.2s;
    gap: 0.3rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }
`;
