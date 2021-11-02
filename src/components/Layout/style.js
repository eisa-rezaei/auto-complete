import styled, { createGlobalStyle } from "styled-components";

export const StLayoutContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  padding: 10vh 20vw;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 5vh 10vw;
  }
`;
export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    background-color: #f5f8fb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
input{
    outline: none;
    border: none;
}
li {
    list-style: none;
}
ul{
    padding: 0;
}
`;
