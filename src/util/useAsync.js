import { useReducer, useEffect } from "react";
import { asyncReducer } from "../util/asyncReducer";

function useAsync(callback, deps = "", skip = false) {
  const [state, dispatch] = useReducer(asyncReducer, {
    loading: false,
    data: null,
    error: null,
  });
  //es
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await callback(deps);
      dispatch({ type: "SUCCESS", data: response });
    } catch (err) {
      console.log(err);
      dispatch({ type: "ERROR", error: err });
    }
  };

  useEffect(() => {
    skip !== false && fetchData();
    // eslint-disable-next-line
  }, [skip]);

  return [state, fetchData];
}

export default useAsync;
