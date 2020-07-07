import React, {useReducer, createContext} from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import GlobalStyle from "./Style/GlobalStyles";
import Router from "./Common/Router";
import DataStore from "./Common/Store";
import { headerReducer } from "./util/asyncReducer"

export const headerContext = createContext(null)

export default () => {
  const [headerState, headerDispatch] = useReducer(headerReducer, {DATA : "0"})
  const { DATA } = headerState;

  return (
    <DataStore>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <headerContext.Provider value={{headerDispatch, DATA }}>
          <Router />
        </headerContext.Provider>
      </ThemeProvider>
    </DataStore>
  );
};
