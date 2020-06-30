import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import GlobalStyle from "./Style/GlobalStyles";
import Router from "./Common/Router";
import DataStore from "./Common/Store";

export default () => {
  return (
    <DataStore>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </DataStore>
  );
};
