import styled from "styled-components";

export const OurCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 8rem;

    @media (max-width: 600px) {
        justify-content: center;
        align-items: center;
        padding: 25rem 0;
    }
`;

export const OurCoffeesTitle = styled.h1`
    font-size: ${(props) => props.theme.fontSizes["title-l"]};
    font-family: ${(props) => props.theme.fonts.title}, sans-serif;
    color: ${(props) => props.theme["base-title"]};
    font-weight: bolder;
`;

export const CoffeesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 2rem;
`;
