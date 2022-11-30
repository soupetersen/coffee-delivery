import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.regular};
  }

  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors["base-background"]}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }
`;
