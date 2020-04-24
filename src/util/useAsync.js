import { useReducer, useEffect, useCallback } from "react";
import { asyncReducer } from "../util/asyncReducer";

function useAsync(callback, dept = "", flag) {
  const [state, dispatch] = useReducer(asyncReducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await callback(dept);
      dispatch({ type: "SUCCESS", data: { response } });
    } catch (err) {
      console.log(err);
      dispatch({ type: "ERROR", error: err });
    }
  }, [callback, dept]);

  useEffect(() => {
    if (flag === true) {
      return;
    }
    fetchData();
  }, [fetchData, flag]);

  return [state, fetchData];
}

export default useAsync;
