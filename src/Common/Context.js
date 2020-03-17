import React, { useReducer, useEffect } from "react";
import { Store } from "./Store";

export const DataContext = React.createContext();

export default props => {
  const [data, dispatch] = useReducer(Store, initState);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
