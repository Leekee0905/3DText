import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    180deg,
    hsl(240deg 100% 1%) 1%,
    hsl(240deg 100% 3%) 17%,
    hsl(240deg 100% 6%) 26%,
    hsl(240deg 100% 9%) 37%,
    hsl(240deg 100% 12%) 46%,
    hsl(240deg 100% 15%) 53%,
    hsl(240deg 100% 18%) 59%,
    hsl(240deg 100% 21%) 65%,
    hsl(240deg 100% 24%) 70%,
    hsl(240deg 100% 27%) 74%,
    hsl(240deg 100% 30%) 78%,
    hsl(240deg 100% 33%) 81%,
    hsl(240deg 100% 36%) 84%,
    hsl(240deg 100% 39%) 87%,
    hsl(240deg 100% 42%) 89%,
    hsl(240deg 100% 45%) 91%,
    hsl(240deg 100% 48%) 93%,
    hsl(240deg 100% 51%) 95%,
    hsl(240deg 100% 54%) 96%,
    hsl(240deg 100% 57%) 97%,
    hsl(240deg 100% 60%) 98%,
    hsl(240deg 100% 63%) 99%,
    hsl(240deg 100% 66%) 100%
  );
  }
  .scene{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }`;

export default GlobalStyles;
