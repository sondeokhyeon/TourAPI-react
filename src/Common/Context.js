import React from "react";

export const DataContext = React.createContext();

export default props => {
  return <DataContext.Provider>{props.children}</DataContext.Provider>;
};
