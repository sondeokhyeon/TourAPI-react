import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
}

const stateContext = createContext(null);
const dispatchContext = createContext(null);

const DataStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });
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

export async function getSpotList(dispatch) {
  dispatch({ type: "LOADING" });
  try {
    const response = await axios.get(
      `https://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&contentTypeId=12&areaCode=1&sigunguCode=1&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=1`
    );
    dispatch({ type: "SUCCESS", data: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "ERROR", err: err });
  }
}

export default DataStore;
