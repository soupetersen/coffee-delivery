import styled from "styled-components";

export const SendOrderButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    width: 100%;
    height: 2.875rem;
    margin-top: 1rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["brand-yellow"]};

    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes["bold-s"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;
