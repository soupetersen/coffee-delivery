import styled, { css } from "styled-components";

export const SuccessfulOrderContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5rem 8rem;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 0.8rem;

    width: 100%;
    height: 100%;

    img {
        width: 30.75rem;
        height: 18.313rem;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;

    h2 {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
        font-size: ${({ theme }) => theme.fontSizes["title-l"]};
    }

    p {
        color: ${({ theme }) => theme.colors["base-subtitle"]};
        font-size: ${({ theme }) => theme.fontSizes["regular-l"]};
    }

    > div {
        width: 100%;
        height: 15rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        margin-top: 2rem;
        border: double 1px transparent;
        border-image-slice: 1;
        border-radius: 5px 30px;

        background-image: linear-gradient(
                ${({ theme }) => theme.colors["base-background"]},
                ${({ theme }) => theme.colors["base-background"]}
            ),
            radial-gradient(
                circle at top left,
                ${({ theme }) => theme.colors["brand-yellow-dark"]},
                ${({ theme }) => theme.colors["brand-purple-dark"]}
            );
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
`;

export const InfoTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-left: 1rem;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1rem;

        span {
            width: 100%;
            font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
            color: ${({ theme }) => theme.colors["base-text"]};
            font-weight: bold;
        }

        p {
            width: 100%;
            font-size: ${({ theme }) => theme.fontSizes["regular-m"]};
            color: ${({ theme }) => theme.colors["base-text"]};
        }
    }
`;

const CIRCLE_COLOR = {
    purple: "brand-purple",
    yellow: "brand-yellow",
    yellowDark: "brand-yellow-dark",
} as const;

interface CircleColorProps {
    circleColor: keyof typeof CIRCLE_COLOR;
}

export const IconCircle = styled.div<CircleColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: ${(props) =>
        props.theme.colors[CIRCLE_COLOR[props.circleColor]]};

    svg {
        color: ${({ theme }) => theme.colors["base-white"]};
    }
`;

export const NoCompleteOrderMessage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30rem;
    text-align: center;

    & h2 {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
        font-size: ${({ theme }) => theme.fontSizes["title-s"]};
    }
`;
