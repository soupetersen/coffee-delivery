import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    div {
        display: flex;
        width: 100%;
        gap: 1rem;
    }
`;

interface InputProps {
    width?: string;
}

export const BaseInput = styled.input<InputProps>`
    border: 0;
    border: 2px solid transparent;
    outline: none;
    height: 2.625rem;
    padding: 1rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    border: ${(props) => props.theme["brand-yellow-dark"]};
    font-size: ${({ theme }) => theme.fontSizes["regular-s"]};
    width: ${(props) => props.width};

    color: ${(props) => props.theme["base-label"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};

    &:focus {
        border-color: ${(props) => props.theme["brand-yellow-dark"]};
    }

    &:disabled:hover {
        cursor: not-allowed;
    }

    &::placeholder {
        color: ${(props) => props.theme["base-hover"]};
    }
`;
