import React from "react";
import GlobalStyle from "./Style/GlobalStyles";
import Router from "./Common/Router";
import DataContext from "./Common/Context";

export default () => {
  return (
    <DataContext>
      <GlobalStyle />
      <Router />
    </DataContext>
  );
};
