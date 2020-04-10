import React, { createContext, useContext, useReducer } from "react";
import { initState, AsyncDispatch } from "../util/AsyncUtil";
import * as api from "../util/API";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      if (action.key === "info") {
        return {
          loading: true,
          data: {
            info: [],
            minor: state.data.minor,
          },
          error: null,
        };
      }
      return {
        loading: true,
        data: {
          minor: [],
          info: [],
        },
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: {
          ...state.data,
          [action.key]: state.data[action.key].concat(action.data),
        },
        error: null,
      };

    case "ADD":
      return {
        loading: false,
        data: {
          ...state.data,
          info: state.data.info.concat(action.prevdata, action.data),
        },
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: [],
        error: action.error,
      };

    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
}

const stateContext = createContext(null);
const dispatchContext = createContext(null);

const DataStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
};

export function useDataState() {
  const state = useContext(stateContext);
  if (!state) {
    throw new Error("cannot find stateProvider");
  }
  return state;
}

export function useDataDispatch() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error("cannot find stateProvider");
  }
  return dispatch;
}

export const getSpotList = AsyncDispatch(api.getSpotList, "info");
export const getMinorList = AsyncDispatch(api.getMinorList, "minor");

export default DataStore;
