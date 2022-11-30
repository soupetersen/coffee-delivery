import styled from "styled-components";
import CardBackground from "../../../assets/card-background.png";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 34rem;
    padding: 5rem 8rem;
    gap: 4rem;

    background-image: url(${CardBackground});
    background-repeat: no-repeat;
    background-size: cover;

    & img {
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 1215px) {
        justify-content: center;
        & img {
            width: 90%;
        }
    }
`;

export const CardTitle = styled.h1`
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.fontSizes["title-xl"]};
    font-weight: bold;
    line-height: 130%;
`;

export const SubTitle = styled.p`
    width: 90%;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.fontSizes["regular-l"]};
    margin-top: 2rem;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Advantages = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    width: 100%;
    flex-flow: row wrap;

    & div {
        width: 50%;
        display: flex;
        align-items: center;
        margin-top: 2rem;

        @media (max-width: 600px) {
            width: auto;
            padding: 0.5rem 0;
            margin: auto;
        }

        & span {
            font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
            color: ${({ theme }) => theme.colors["base-text"]};
            margin-left: 1rem;
        }

        & svg {
            color: ${({ theme }) => theme.colors["base-white"]};
            background-color: ${({ theme }) =>
                theme.colors["brand-yellow-dark"]};
            border-radius: 50%;
            font-size: 2.8rem;
            padding: 0.5rem;
        }
    }

    & div:nth-child(2) svg {
        background-color: ${({ theme }) => theme.colors["base-text"]};
    }

    & div:nth-child(3) svg {
        background-color: ${({ theme }) => theme.colors["brand-yellow"]};
    }

    & div:nth-child(4) svg {
        background-color: ${({ theme }) => theme.colors["brand-purple"]};
    }
`;
