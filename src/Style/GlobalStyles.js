import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

export const CONTENTS = styled.div`
  float: right;
  width: 80%;
  margin-left: 20%;
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 0px;
    width: 100%;
  }
`;

export const CONTAINER = styled.div`
  width: 95%;
  padding: 4em 0;
  margin: 0 auto;
  & h1 {
    font-size: 3rem;
    font-weight: bold;
    padding-left: 10px;
  }
  & h2 {
    font-size: 2rem;
    font-weight: bold;
    padding-left: 10px;
  }
  & h3 {
    font-size: 1rem;
    font-weight: bold;
    padding-left: 10px;
  }
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const MAIN_TITLE = styled.h1`
  padding-bottom: 20px;
`;

export const SUB_TITLE = styled.h2`
  @media only screen and (min-width: 300px) and (max-width: 800px) {
    display: none;
  }
`;

export default GlobalStyle;
