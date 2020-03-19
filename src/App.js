import React from "react";
import GlobalStyle from "./Style/GlobalStyles";
import Router from "./Common/Router";
import DataStore from "./Common/Store";

export default () => {
  return (
    <DataStore>
      <GlobalStyle />
      <Router />
    </DataStore>
  );
};
