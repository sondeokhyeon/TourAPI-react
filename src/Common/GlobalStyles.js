import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

export const CONTENTS = styled.div`
  float: right;
  width: 85%;
`;

export const CONTAINER = styled.div`
  width: 80%;
  padding: 4em 0;
  margin: 0 auto;
  & h1 {
    font-size: 3rem;
    font-weight: bold;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
