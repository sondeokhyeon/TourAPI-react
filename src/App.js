import React from "react";
import GlobalStyle from "./Common/GlobalStyles";
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
